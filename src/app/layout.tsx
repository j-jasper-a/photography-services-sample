import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import FooterMobile from "@/components/footer/FooterMobile";
import FloatingHome from "@/components/common/FloatingHome";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pixel - Photography Services",
  description: "This is a sample website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} relative bg-light text-dark`}>
        <Header />
        {children}
        <Footer />
        <FooterMobile />
        <FloatingHome />
      </body>
    </html>
  );
}
