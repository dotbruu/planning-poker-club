import "./globals.css";

export const metadata = {
  title:
    "Planning Poker Club - Free and simple tool for planning poker sessions",
  description: "Free and simple tool for planning poker sessions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="/favicon.ico" rel="icon" />
      </head>

      <body>{children}</body>
    </html>
  );
}
