import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.scss";
import Navbar from "@/components/navbar";

const titleFont = localFont({
  src: [
    {
      path: "./fonts/destra.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/destra-light.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-title",
});

const mainFont = localFont({
  src: [
    {
      path: "./fonts/DraftingMono-Light.otf",
      weight: "200",
    },
    {
      path: "./fonts/DraftingMono-Regular.otf",
      weight: "400",
    },
  ],
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "mruczekpln",
  description: "kwota to moj krasz.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-PL" className={`${mainFont.variable} ${titleFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
