import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EasyMart",
  description: "EasyMart",
};

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
