import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavSection } from "@/components/navSection";
import { TopBar } from "@/components/topBar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shan Interiors",
  description: "Your Preferred Interior Design Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopBar />
        <NavSection />
        {children}

        {/* footer */}
        <section className=" project-3D  flex flex-col gap-6 mt-10">
          <Footer />
        </section>
      </body>
    </html>
  );
}
