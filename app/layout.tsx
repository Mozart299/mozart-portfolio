import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import WelcomeGreeting from "@/components/WelcomeGreeting";
import { WelcomeIntro } from "@/components/WelcomeIntro";
import { pageMetadata, siteUrl } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const display = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  ...pageMetadata({
    title: "Peter Ssendegeya | Software Engineer",
    description: "Software engineer in Uganda building web and mobile apps, payment systems, developer tools and distributed systems.",
    path: "/",
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${display.variable} antialiased`}
      >
        <WelcomeIntro>
          <WelcomeGreeting />
        </WelcomeIntro>
        {children}
      </body>
    </html>
  );
}
