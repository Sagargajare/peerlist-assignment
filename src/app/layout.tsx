import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DashboardLayout from "@/layouts/Dashboard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peerlist",
  description: "Peerlist is a platform for hiring and job hunting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
