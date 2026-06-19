export type Lang = 'pt' | 'en'

export type Size = {
  label: string
  moloniRef: string
}

export type Product = {
  n: string
  a: string
  sz: Size[]
}

export type Brand = {
  b: string
  s: Product[]
}

export const CATALOG: Brand[] = [
  {
    b: 'Tequila Aluzar',
    s: [
      { n: 'Aluzar Tequila Blanco', a: '40°ABV', sz: [{ label: '70 cl', moloniRef: '0001' }, { label: '1 L', moloniRef: '0002' }] },
      { n: 'Aluzar Tequila Reposado', a: '40°ABV', sz: [{ label: '70 cl', moloniRef: '0003' }, { label: '1 L', moloniRef: '0004' }] },
      { n: 'Aluzar Tequila Alta Graduación', a: '50°ABV', sz: [{ label: '70 cl', moloniRef: '0005' }] },
    ],
  },
  {
    b: 'Tequila Tobien',
    s: [{ n: 'Tequila Tobien Blanco', a: '35°ABV', sz: [{ label: '70 cl', moloniRef: '0006' }] }],
  },
  {
    b: 'Tequila Cascahuin',
    s: [
      { n: 'Cascahuin Blanco', a: '40°ABV', sz: [{ label: '70 cl', moloniRef: '0007' }] },
      { n: 'Cascahuin Reposado', a: '40°ABV', sz: [{ label: '70 cl', moloniRef: '0008' }] },
      { n: 'Cascahuin Anejo', a: '40°ABV', sz: [{ label: '70 cl', moloniRef: '0009' }] },
      { n: 'Cascahuin Plata', a: '48°ABV', sz: [{ label: '70 cl', moloniRef: '0010' }] },
      { n: 'Cascahuin Tahona', a: '42°ABV', sz: [{ label: '70 cl', moloniRef: '0011' }] },
    ],
  },
  {
    b: 'Mezcal Banhez',
    s: [
      { n: 'Banhez Mezcal Ensamble', a: '42°ABV', sz: [{ label: '70 cl', moloniRef: '0012' }, { label: '1 L', moloniRef: '0013' }] },
      { n: 'Banhez Mezcal Cuishe', a: '47°ABV', sz: [{ label: '70 cl', moloniRef: '0014' }] },
      { n: 'Banhez Mezcal Tobala', a: '47°ABV', sz: [{ label: '70 cl', moloniRef: '0015' }] },
      { n: 'Banhez Mezcal Tepeztate', a: '47°ABV', sz: [{ label: '70 cl', moloniRef: '0016' }] },
    ],
  },
  {
    b: 'Combier Triple Sec',
    s: [{ n: "Combier Triple Sec L'Original", a: '40°ABV', sz: [{ label: '70 cl', moloniRef: '0017' }, { label: '3 L', moloniRef: '0018' }] }],
  },
]

export type Translation = {
  info: string
  bar: string
  bar_ph: string
  tel: string
  tel_ph: string
  order: string
  notes: string
  notes_ph: string
  submit: string
  total: string
  recap: string
  items: (n: number) => string
  bottles: (n: number) => string
  err_bar: string
  err_tel: string
  err_order: string
  opening: string
  moloni_ok: string
}

export const T: Record<Lang, Translation> = {
  pt: {
    info: 'Informações do estabelecimento',
    bar: 'Nome do bar / restaurante',
    bar_ph: 'Ex: Bar Central',
    tel: 'Telemóvel (WhatsApp)',
    tel_ph: '+351 9XX XXX XXX',
    order: 'Encomenda',
    notes: 'Notas',
    notes_ph: 'Entrega urgente, instruções especiais...',
    submit: 'Enviar encomenda via WhatsApp',
    total: 'Total',
    recap: 'Resumo da encomenda',
    items: (n) => (n === 1 ? '1 artigo' : `${n} artigos`),
    bottles: (n) => (n === 1 ? '1 garrafa' : `${n} garrafas`),
    err_bar: 'Introduza o nome do estabelecimento.',
    err_tel: 'Introduza um número de telemóvel.',
    err_order: 'Selecione pelo menos 1 produto.',
    opening: 'A abrir WhatsApp...',
    moloni_ok: 'Encomenda registada em Moloni ✓',
  },
  en: {
    info: 'Venue information',
    bar: 'Bar / restaurant name',
    bar_ph: 'Ex: Central Bar',
    tel: 'Phone (WhatsApp)',
    tel_ph: '+351 9XX XXX XXX',
    order: 'Order',
    notes: 'Notes',
    notes_ph: 'Urgent delivery, special instructions...',
    submit: 'Send order via WhatsApp',
    total: 'Total',
    recap: 'Order summary',
    items: (n) => (n === 1 ? '1 item' : `${n} items`),
    bottles: (n) => (n === 1 ? '1 bottle' : `${n} bottles`),
    err_bar: 'Please enter the venue name.',
    err_tel: 'Please enter a phone number.',
    err_order: 'Please select at least 1 product.',
    opening: 'Opening WhatsApp...',
    moloni_ok: 'Order registered in Moloni ✓',
  },
}

export const WHATSAPP_NUMBER = '351938009839'

export const key = (product: string, size: string) => `${product}||${size}`
