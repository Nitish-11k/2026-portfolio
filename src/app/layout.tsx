import type { Metadata } from "next";
// 1. Import Inter font
import { Inter } from "next/font/google"; 
import "./globals.css";

// 2. Configure the Inter font (MUST be outside the metadata object)
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

// 3. Your Optimized Metadata
export const metadata: Metadata = {
  title: {
    default: "Nitish Kumar | Backend & Scalability Engineer",
    template: "%s | Nitish Kumar",
  },
  description: "Specialized in building high-performance backend systems and scalable web applications for startups using Java Spring Boot, Next.js, and Cloud Architecture.",
  
  keywords: [
    "Backend Engineer",
    "Java Spring Boot Developer", 
    "Next.js Developer",
    "Scalable Systems",
    "FounderKit", 
    "Keva Agency",
    "API Design",
    "Cloud Architecture"
  ],
  
  authors: [{ name: "Nitish Kumar", url: "https://keva.agency" }], // Updated based on your agency
  creator: "Nitish Kumar",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://keva.agency",
    title: "Nitish Kumar | Backend & Scalability Engineer",
    description: "Building the technical foundation for the next generation of startups.",
    siteName: "Nitish Kumar Portfolio",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Nitish Kumar - Backend Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nitish Kumar | Backend & Scalability Engineer",
    description: "Building scalable backend systems for startups. Spring Boot & Next.js expert.",
    images: ["/og-image.png"],
    creator: "@nitishk0014", // Updated with your handle
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 4. Apply the font variable here */}
      <body className={`${inter.variable} antialiased bg-background text-white`}>
        {children}
      </body>
    </html>
  );
}