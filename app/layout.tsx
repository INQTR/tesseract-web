import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL("https://thetesseract.app"),
  title: "Tesseract Agent - On-Device Intelligence for macOS",
  description:
    "A privacy-focused AI assistant for macOS. Dictation, text-to-speech, image generation, and more — powered by open models, processed entirely on-device.",
  icons: {
    icon: [
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/icon-128x128.png", sizes: "128x128", type: "image/png" },
    ],
    apple: [
      { url: "/icon-256x256.png", sizes: "256x256", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Tesseract Agent - On-Device Intelligence for macOS",
    description:
      "A privacy-focused AI assistant for macOS. Dictation, text-to-speech, image generation, and a local AI agent — powered by open models, processed entirely on-device.",
    siteName: "Tesseract Agent",
    images: [
      {
        url: "/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "Tesseract Agent",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Tesseract Agent - On-Device Intelligence for macOS",
    description:
      "A privacy-focused AI assistant for macOS — powered by open models, processed entirely on-device.",
    images: ["/icon-512x512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
