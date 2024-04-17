import type { Metadata } from "next";
import "../globals.css";
import { Providers } from "../providers";

import { I18nextProvider, initReactI18next } from "react-i18next";
import i18n from "@/i18n";

export const metadata: Metadata = {
  title: "Paloma Spirits",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
