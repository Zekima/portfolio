import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Din nye utvikler?",
  description: "Tilbyr profesjonelle webutviklingstjenester med spesialisering i Next.js. Fra skreddersydde webapplikasjoner til responsive nettsider. La oss skape noe flott sammen.",
  applicationName: 'Christian Ledaal Portfolio',
  creator: 'Christian Ledaal',
  publisher: 'Christian Ledaal',
  category: 'Web Development',
  keywords: [
    "webutvikler",
    "Next.js",
    "fullstack utvikler",
    "frontend utvikler",
    "backend utvikler",
    "webapplikasjoner",
    "responsive design",
    "webdesign",
    "brukeropplevelse",
    "brukergrensesnitt",
    "JavaScript utvikler",
    "React utvikler",
    "Node.js utvikler",
    "CSS ekspert",
    "HTML utvikler",
    "API-integrasjon",
    "moderne webteknologier",
    "Git versjonskontroll",
    "agile metodikker",
    "testdrevet utvikling",
    "webutviklingstjenester",
    "skreddersydde webapplikasjoner",
    "e-handelsløsninger",
    "nettsideoptimalisering",
    "webapplikasjonsutvikling",
    "nettstedsvedlikehold",
    "teknisk SEO",
    "webytelse",
    "netsikkerhet",
    "digital transformasjon"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <body className={inter.className}>{children}</body>
    </html>
  );
}
