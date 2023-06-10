import { Header } from "../molecules/header";

type TemplateCenteredProps = {
  children: React.ReactNode;
};

export function TemplateCentered({ children }: TemplateCenteredProps) {
  return (
    <>
      <Header />
      <div className="flex  justify-center h-screen">
        <div className="w-[600px]">{children}</div>
      </div>
    </>
  );
}
