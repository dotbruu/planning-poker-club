import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  register?: UseFormRegisterReturn;
}

export function Input({
  label,
  error,
  className,
  name,
  register,
  ...props
}: InputProps) {
  return (
    <div className="mt-2 w-full">
      {label ? <label className="text-sm text-gray-500">{label}</label> : null}
      <input
        className={"w-full h-12 p-4 mt-2 rounded-sm" + className}
        {...props}
        {...register}
      />
      {error ? <span className="text-red-500 text-sm">{error}</span> : null}
    </div>
  );
}
