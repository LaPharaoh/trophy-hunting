import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AchievementForge — The Trophy Hunter's Platform",
  description:
    "Track every trophy and achievement across PlayStation, Xbox, and Steam in one place. Join 50,000+ hunters on the definitive platform for completionists.",
  keywords: [
    "trophy hunter",
    "achievement tracker",
    "PSN trophies",
    "Xbox achievements",
    "Steam achievements",
    "completionist",
    "100% completion",
    "gaming",
  ],
  openGraph: {
    title: "AchievementForge — The Trophy Hunter's Platform",
    description:
      "Track trophies and achievements across PlayStation, Xbox, and Steam. Built for completionists.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
