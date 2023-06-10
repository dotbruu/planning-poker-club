import "./globals.css";

export const metadata = {
  title: "Planning Poker Club",
  description: "Free and simple tool for planning poker sessions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
