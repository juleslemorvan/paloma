import { NextResponse } from "next/server";

const MOLONI_API = "https://api.molonion.pt/v1";

function gql(query: string, variables?: Record<string, unknown>) {
  return fetch(MOLONI_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.MOLONI_API_KEY}`,
    },
    body: JSON.stringify({ query, variables }),
  }).then((r) => r.json());
}

async function findOrCreateCustomer(
  companyId: number,
  tel: string,
  bar: string,
): Promise<number> {
  // Cherche un client existant par téléphone
  const searchRes = await gql(
    `
    query($companyId: Int!, $tel: String!) {
      customers(companyId: $companyId, options: {
        search: { field: ALL, value: $tel }
        pagination: { page: 1, qty: 1 }
      }) {
        errors { field msg }
        data { customerId name }
      }
    }
  `,
    { companyId, tel },
  );

  const customers = searchRes?.data?.customers?.data;
  if (Array.isArray(customers) && customers.length > 0) {
    return customers[0].customerId;
  }

  // Crée le client à la volée
  const createRes = await gql(
    `
    mutation($companyId: Int!, $name: String!, $tel: String!) {
      customerCreate(companyId: $companyId, data: {
        number: $tel
        name: $name
        phone: $tel
        vat: "999999990"
        countryId: 1
        languageId: 1
      }) {
        errors { field msg }
        data { customerId }
      }
    }
  `,
    { companyId, name: bar, tel },
  );

  if (createRes?.errors?.length > 0) {
    throw new Error(`Customer create GraphQL error: ${JSON.stringify(createRes.errors)}`);
  }

  const created = createRes?.data?.customerCreate;
  if (!created || created?.errors?.length > 0) {
    throw new Error(`Customer create error: ${JSON.stringify(created?.errors)} | full: ${JSON.stringify(createRes)}`);
  }

  return created.data.customerId;
}

export async function POST(req: Request) {
  try {
    const { bar, tel, notes, items } = (await req.json()) as {
      bar: string;
      tel: string;
      notes: string;
      items: { name: string; size: string; qty: number }[];
    };

    const companyId = Number(process.env.MOLONI_COMPANY_ID);
    const documentSetId = Number(process.env.MOLONI_DOCUMENT_SET_ID);

    const customerId = await findOrCreateCustomer(companyId, tel, bar);

    const today = new Date().toISOString();
    const expiration = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];

    const products = items.map((item, i) => ({
      productId: Number(process.env.MOLONI_GENERIC_PRODUCT_ID),
      qty: item.qty,
      ordering: i + 1,
      name: `${item.name} ${item.size}`,
      price: 0,
    }));

    const res = await gql(
      `
      mutation($companyId: Int!, $data: PurchaseOrderInsert!) {
        purchaseOrderCreate(companyId: $companyId, data: $data) {
          errors { field msg }
          data { documentId number }
        }
      }
    `,
      {
        companyId,
        data: {
          documentSetId,
          customerId,
          date: today,
          expirationDate: expiration,
          status: 1,
          notes: notes?.trim() ? `${bar} — ${notes.trim()}` : bar,
          yourReference: `WA-${Date.now()}`,
          products,
        },
      },
    );

    // top-level GraphQL errors (schema validation failures)
    if (res?.errors?.length > 0) {
      console.error("Moloni GraphQL error:", res.errors);
      return NextResponse.json(
        { success: false, error: res.errors },
        { status: 500 },
      );
    }

    const result = res?.data?.purchaseOrderCreate;
    if (result?.errors?.length > 0) {
      console.error("Moloni insert error:", result.errors);
      return NextResponse.json(
        { success: false, error: result.errors },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      document_id: result.data.documentId,
    });
  } catch (err) {
    console.error("Moloni API error:", err);
    return NextResponse.json(
      { success: false, error: String(err) },
      { status: 500 },
    );
  }
}
