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
  title: "Article App",
  description: "A modern Progressive Web App for reading and managing articles.",
  lang: "en",
  icons: [
    { rel: "icon", url: "/images/cw.png" },
    { rel: "apple-touch-icon", url: "/images/cw.png" },
  ],
  openGraph: {
    title: "Article App - Read & Manage Articles",
    description: "Stay updated with the latest articles in education, news, and tech.",
    url: "https://article-app-bay.vercel.app/login",
    siteName: "Article App",
    images: [
      {
        url: "/images/cw.png",
        width: 512,
        height: 512,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Article App - Read & Manage Articles",
    description: "Stay updated with the latest articles in education, news, and tech.",
    images: ["/images/cw.png"],
    site: "@your_twitter_handle",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#4f46e5",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}