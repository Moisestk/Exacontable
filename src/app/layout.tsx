import type { Metadata } from "next";
import { Saira } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-saira",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EXA | Sistema Contable y Financiero para Ecuador",
  description:
    "EXA es el sistema contable y financiero que automatiza la facturación electrónica, compras, ventas, inventario y reportes de tu empresa en Ecuador.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${saira.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
