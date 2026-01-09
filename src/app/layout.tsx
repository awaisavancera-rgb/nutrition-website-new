import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

import { CartProvider } from "@/context/CartContext";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";

export const metadata: Metadata = {
  title: "Nutrition Supplies",
  description: "Premium nutrition for your performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable}`}>
        <CartProvider>
          <HeaderWrapper />
          <CartSidebar />
          <main>
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
