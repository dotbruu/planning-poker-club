import { Header } from "@/components/molecules/header";
import "./globals.css";
import { Modak } from "next/font/google";
import localFont from "next/font/local";
import Head from "next/head";
import Script from "next/script";
export const metadata = {
  title: "Planning Poker Club - Free and Simple Tool for Agile Planning",
  description:
    "Simplify your agile planning sessions with Planning Poker Club. Fast, free, and easy-to-use, perfect for Scrum teams.",
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
        {/* General SEO Metadata */}
        <title>{metadata.title}</title>
        <meta content={metadata.description} name="description" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta
          content="Planning Poker, Scrum, agile planning, Scrum tools, sprint planning, online Planning Poker, free Planning Poker tool"
          name="keywords"
        />
        <link href="/favicon.ico" rel="icon" />

        {/* Open Graph Metadata */}
        <meta content={metadata.title} property="og:title" />
        <meta content={metadata.description} property="og:description" />
        <meta content="https://planningpokerclub.com" property="og:url" />
        <meta content="website" property="og:type" />
        <meta
          content="https://planningpokerclub.com/assets/images/og-image.png"
          property="og:image"
        />

        {/* Twitter Metadata */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={metadata.title} name="twitter:title" />
        <meta content={metadata.description} name="twitter:description" />
        <meta
          content="https://planningpokerclub.com/assets/images/og-image.png"
          name="twitter:image"
        />
        <meta content="@planningpokerclub" name="twitter:site" />

        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Planning Poker Club",
              url: "https://planningpokerclub.com",
              description:
                "Simplify your agile planning sessions with Planning Poker Club. Fast, free, and easy-to-use, perfect for Scrum teams.",
              applicationCategory: "ProductivityApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "0.00",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </Head>
      <body>
        <Header />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6EQNZZXM35"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6EQNZZXM35');
            `,
          }}
        />
      </body>
    </html>
  );
}
