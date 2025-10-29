import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sumedha Minocha",
  description: "Portfolio website of Sumedha Minocha",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  keywords: [
    "Sumedha Minocha",
    "PhD",
    "Cornell",
    "Development Economics",
    "Research",
    "Publications",
  ],
  openGraph: {
    type: "website",
    siteName: "Sumedha Minocha",
    title: "Sumedha Minocha",
    description: "Portfolio website of Sumedha Minocha",
    url: "/",
    images: [
      {
        url: "/assets/profile_picture.jpg",
        alt: "Sumedha Minocha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumedha Minocha",
    description: "Portfolio website of Sumedha Minocha",
    images: [
      {
        url: "/assets/profile_picture.jpg",
        alt: "Sumedha Minocha",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <main className="mx-auto max-w-6xl px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
