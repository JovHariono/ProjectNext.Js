import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/utils/Navbar";

const gabarito = Gabarito({
  subsets: ["latin"],
});

//SEO
export const metadata: Metadata = {
  title: "CuyAnimeList",
  description: "Website anime indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.className} bg-color-dark`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
