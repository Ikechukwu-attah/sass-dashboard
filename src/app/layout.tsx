import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaaS Dashboard Template",
  description: "A modern, clean SaaS dashboard template built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex h-screen`}>
        <ThemeProviderWrapper>
          {/* Sidebar - Fixed & Non-Scrolling */}
          <Sidebar />
          {/* Main Content - Scrollable */}
          <div className="flex flex-col flex-1 overflow-y-auto">
            <Navbar />
            <main className="p-6">{children}</main>
          </div>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
