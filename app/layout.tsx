import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christian Ledaal",
  description: "Velkommen til min portefølje. Jeg er Christian Ledaal, en erfaren webutvikler som lager responsive og brukervennlige nettsteder. Utforsk mine prosjekter, ferdigheter og erfaring innen webutvikling. La oss skape noe flott sammen.",
  applicationName: 'Christian Ledaal Portfolio',
  creator: 'Christian Ledaal',
  publisher: 'Christian Ledaal',
  category: 'Web Development',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
