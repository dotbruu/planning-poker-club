interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  leftElement?: React.ReactNode;
  variant?: "primary" | "secondary";
  text: string;
  selected?: boolean;
  isSubmitting?: boolean;
}

export function Button({
  text,
  variant,
  leftElement,
  selected,
  isSubmitting,
  ...props
}: ButtonProps) {
  return (
    <>
      {variant === "primary" && (
        <button
          {...props}
          className={`w-full h-14 font-bold text-primary bg-white
          rounded-sm transition-colors hover:bg-gray-light ${props.className}`}
        >
          {isSubmitting ? "Loading..." : text}
        </button>
      )}
      {variant === "secondary" && (
        <button
          {...props}
          className={`w-full h-14 font-bold text-white bg-secondary
        rounded-sm transition-colors hover:bg-secondary-dark ${props.className}`}
        >
          {isSubmitting ? "Loading..." : text}
        </button>
      )}
    </>
  );
}
