import { Header } from "@/components/molecules/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <Header />
      {children}
    </div>
  );
}
