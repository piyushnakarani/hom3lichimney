import type { Metadata } from "next";
import "./globals.css";
import ResponsiveNav from "@/Component/Home/Navbar/ResponsiveNav";
import { manrope } from "./fonts";
import Footer from "@/Component/Home/Footer/Footer";


export const metadata: Metadata = {
  title: "Hom3li",
  description: "Hom3li is your local, family-focused team keeping homes warm and safe.",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", type: "image/x-icon" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased bg-white`}>
        <ResponsiveNav />
        {children}
        <Footer />
        {/* <TopScroll /> */}
      </body>
    </html>
  );
}
