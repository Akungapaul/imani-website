import type { Metadata } from "next";
import { Cormorant, Cormorant_Garamond } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import "./globals.css";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Imani Achokah | Gospel Voice Training",
    template: "%s | Imani Achokah",
  },
  description: "Gospel voice training and music production for singers who want to honor God with excellence. Individual coaching, choir training, and production services.",
  keywords: ["Gospel voice training", "Gospel vocal coach", "choir training", "Gospel music production", "worship leader training"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${cormorantGaramond.variable} antialiased`}
      >
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
