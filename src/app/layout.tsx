import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "OpenLine — AI-Powered Call Answering for Small Business",
  description:
    "Never miss another call. OpenLine answers your business phone 24/7 with AI that books appointments, qualifies leads, and sends instant summaries.",
  openGraph: {
    title: "OpenLine — AI-Powered Call Answering",
    description: "Never miss another call. AI that answers, qualifies, and books — 24/7.",
    url: "https://openlinecompany.com",
    siteName: "OpenLine",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
