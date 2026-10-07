import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EasyMart",
  description: "EasyMart",
};

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Providers from "./providers";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
