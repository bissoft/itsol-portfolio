import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    default: "ITSOL - IT Solution",
    template: "%s | ITSOL",
  },
  description:
    "Leading IT Solutions and Services provider specializing in web development, mobile apps, blockchain, and AI technologies.",
  keywords: [
    "IT Solutions",
    "Web Development",
    "Mobile App Development",
    "Blockchain",
    "AI",
    "Software Development Company",
  ],
  authors: [{ name: "ITSOL" }],
  creator: "ITSOL",
  publisher: "ITSOL",
  icons: {
    icon: "/unnamed (1).png",
    shortcut: "/unnamed (1).png",
    apple: "/unnamed (1).png",
  },
  openGraph: {
    title: "ITSOL - IT Solution",
    description: "Transforming businesses with cutting-edge IT solutions.",
    url: "https://itsol.tech",
    siteName: "ITSOL",
    images: [
      {
        url: "/unnamed (1).png",
        width: 800,
        height: 600,
        alt: "ITSOL Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ITSOL - IT Solution",
    description: "Innovative IT solutions for modern businesses.",
    images: ["/unnamed (1).png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
