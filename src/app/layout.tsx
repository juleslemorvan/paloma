import type { Metadata } from "next";
import "../globals.css";
import { Providers } from "../providers";

export const metadata: Metadata = {
  title: "Paloma Spirits",
  description: "Co-creation & developpement de marques de spiritieux pour le bar,avec les bartenders",
  icons: {
    icon: "/flavicon.png",
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
