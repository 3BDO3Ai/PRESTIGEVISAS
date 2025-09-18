import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentWrapper from "@/components/ContentWrapper";

const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo"
});

export const metadata: Metadata = {
  title: "فزعة - سيولة مالية فورية",
  description: "فزعة - نوفر لك سيولة مالية فورية من خلال حلول مبتكرة وآمنة، بدون كفيل وبدون شروط معقدة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-cairo antialiased bg-white`}>
        <ContentWrapper>
          <Header />
          {children}
          <Footer />
        </ContentWrapper>
      </body>
    </html>
  );
}