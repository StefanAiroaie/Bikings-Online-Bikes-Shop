import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartProvider from "@/components/CartProvider";
import { Toaster } from "@/components/ui/toaster";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-JetBrainsMono",
});

export const metadata = {
  title: "Bikings - Your Ultimate Cycling Companion",
  description:
    "Bikings: Discover the best cycling routes, tips, and gear reviews. Join our community of cycling enthusiasts and elevate your biking experience.",
};

export default function RootLayout({ children }) {
  return (
    // This is the layout itself
    <html lang="en">
      <body className={JetBrainsMono.variable}>
        <CartProvider>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
