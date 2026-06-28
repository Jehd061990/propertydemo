import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/ui/sidebar";
import { TopNav } from "@/components/ui/topnav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Property Management — Demo",
  description: "Premium property management SaaS demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div className="flex">
          <Sidebar />
          <div className="flex-1 min-h-screen">
            <TopNav />
            <main className="bg-slate-50 min-h-[calc(100vh-64px)]">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
