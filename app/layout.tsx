import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import WelcomeGreeting from "@/components/WelcomeGreeting";
import { WelcomeIntro } from "@/components/WelcomeIntro";
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
  title: "Peter Ssendegeya | Websites & Apps",
  description: "Software engineer in Uganda building websites, apps and online payment systems for businesses, schools and charities.",
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
