import "./globals.css";
import { Modak } from "next/font/google";
import localFont from "next/font/local";
import Head from "next/head";
export const metadata = {
  title:
    "Planning Poker Club - Free and simple tool for planning poker sessions",
  description: "Free and simple tool for planning poker sessions",
};

const clash = localFont({
  src: "../components/assets/fonts/ClashDisplay.ttf",
  display: "swap",
  variable: "--font-clash",
});

const modakFont = Modak({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-modak",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${clash.className} ${modakFont.variable}`} lang="en">
      <Head>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <body>{children}</body>
    </html>
  );
}
