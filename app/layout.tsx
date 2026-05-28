import type { Metadata } from "next";
import { DM_Serif_Display, Montserrat } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  title: "Blue Marinho",
  description: "Site oficial da banda Blue Marinho. A banda para o seu evento. Agenda de shows, eventos, fotos, vídeos e contato.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${dmSerif.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased bg-blue-marinho text-white">
        {children}
      </body>
    </html>
  );
}
