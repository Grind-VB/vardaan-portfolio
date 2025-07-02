import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vardaan Bazaz — Portfolio",
  description:
    "Developer portfolio of Vardaan Bazaz — building elegant, immersive web & mobile experiences.",
  metadataBase: new URL("https://vardaanbazaz.vercel.app"), // Change this if using a custom domain

  openGraph: {
    title: "Vardaan Bazaz — Portfolio",
    description:
      "Explore projects, skills, and a story-driven journey through Vardaan's work.",
    url: "https://vardaanbazaz.vercel.app",
    siteName: "Vardaan's Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vardaan Bazaz Portfolio Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vardaan Bazaz — Portfolio",
    description:
      "Projects, skills, and stories — in one interactive space.",
    images: ["/og-image.png"],
    creator: "@yourhandle", // optional
  },
};




import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
