import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import { ReactLenis } from "./utils/lenis";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

export const metadata: Metadata = {
  title: "Nitish Kumar | Backend Engineer",
  description: "Specialized in building high-performance backend systems and scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-background text-white`}>
        {/* ReactLenis handles the smooth scrolling for the whole page */}
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}