import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "AILOG - AI-Powered Blog Generator | Create Simple Content Fast",
  description: "Create professional, well-structured blog posts in simple, easy-to-understand English with advanced AI. Generate SEO-friendly content in seconds.",
  keywords: ["blog generator", "AI blog writer", "content creation", "simple English", "SEO content", "blog writing tool", "AI writing assistant"],
  authors: [{ name: "AILOG Team" }],
  creator: "AILOG",
  publisher: "AILOG",
  robots: "index, follow",
  metadataBase: new URL("https://ailog.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "AILOG - AI-Powered Blog Generator | Create Simple Content Fast",
    description: "Create professional, well-structured blog posts in simple, easy-to-understand English with advanced AI. Generate SEO-friendly content in seconds.",
    url: "https://ailog.vercel.app",
    siteName: "AILOG",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AILOG - AI-Powered Blog Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AILOG - AI-Powered Blog Generator | Create Simple Content Fast",
    description: "Create professional, well-structured blog posts in simple, easy-to-understand English with advanced AI. Generate SEO-friendly content in seconds.",
    images: ["/twitter-image.png"],
    creator: "@ailog",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
