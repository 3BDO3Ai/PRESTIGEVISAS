import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Prestige Visas | Premium Visa & Immigration Consultancy",
  description: "Your trusted partner in global visa and immigration excellence. Premium, personalised guidance for UK, Canada, Schengen, USA, Australia & beyond.",
  keywords: "UK visa, Canada immigration, Schengen visa, USA visa, Australia PR, immigration consultant, British consultant, visa advisory",
  metadataBase: new URL('https://prestigevisas.com'),
  openGraph: {
    title: "Prestige Visas | Premium Visa & Immigration Consultancy",
    description: "Your trusted partner in global visa and immigration excellence.",
    url: 'https://prestigevisas.com',
    siteName: 'Prestige Visas',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}