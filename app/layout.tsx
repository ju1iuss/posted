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

export const metadata: Metadata = {
  title: {
    default: "Posted - AI-Powered TikTok Carousel Generator",
    template: "%s | Posted",
  },
  description: "Turn boring text into high-converting TikTok carousels in seconds. AI-powered factory for viral content. Deeply tuned for the algorithm, designed for humans.",
  keywords: ["TikTok", "carousel", "AI", "content creation", "social media", "viral content", "TikTok carousel generator", "content marketing"],
  authors: [{ name: "Posted", url: "https://tasy.ai" }],
  creator: "Tasy AI",
  publisher: "Tasy AI",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://posted.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Posted",
    title: "Posted - AI-Powered TikTok Carousel Generator",
    description: "Turn boring text into high-converting TikTok carousels in seconds. AI-powered factory for viral content.",
    images: [
      {
        url: "/logo.svg",
        width: 114,
        height: 114,
        alt: "Posted Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Posted - AI-Powered TikTok Carousel Generator",
    description: "Turn boring text into high-converting TikTok carousels in seconds.",
    images: ["/logo.svg"],
    creator: "@posted",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  manifest: "/manifest.json",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
