import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label: string;
  options: Option[];
  error?: string;
  register?: UseFormRegisterReturn;
} & React.HTMLAttributes<HTMLSelectElement>;

export function Select({
  label,
  options,
  error,
  register,
  ...props
}: SelectProps) {
  return (
    <div className="flex flex-col w-full">
      <label className="text-sm text-gray-500 font-bold">{label}</label>
      <div className="w-full bg-white mt-2">
        <select
          {...props}
          className="w-full p-4 bg-white h-12 rounded-sm
          border-r-8 border-white"
          {...register}
        >
          <option value="">Select an option</option>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
      {error ? <span className="text-red-500 text-sm">{error}</span> : null}
    </div>
  );
}
