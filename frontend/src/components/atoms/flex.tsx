interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "row" | "column";
}

export function Flex(props: FlexProps) {
  const { children, type, className, ...rest } = props;

  return (
    <div
      {...rest}
      className={`${className} ${
        type === "row" ? "flex flex-row" : "flex flex-row"
      }`}
    >
      {children}
    </div>
  );
}
