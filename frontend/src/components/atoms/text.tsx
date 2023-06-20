interface ITextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Text({ as, text, ...props }: ITextProps) {
  return (
    <>
      {as === "h1" && <h1 {...props}>{text}</h1>}
      {as === "h2" && <h2 {...props}>{text}</h2>}
      {as === "h3" && <h3 {...props}>{text}</h3>}
      {as === "h4" && <h4 {...props}>{text}</h4>}
      {as === "h5" && <h5 {...props}>{text}</h5>}
      {as === "h6" && <h6 {...props}>{text}</h6>}
      {as === "p" && <p {...props}>{text}</p>}
      {!as && <p {...props}>{text}</p>}
    </>
  );
}
