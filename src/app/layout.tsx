import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MundoViagens - Descubra o Mundo",
  description: "Portal de viagens com os melhores destinos turisticos do mundo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
