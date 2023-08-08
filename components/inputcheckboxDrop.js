import React from "react";
import { Controller } from "react-hook-form";

export default function InputCheckBoxDrop({
  name,
  label,
  type,
  control,
  rules,
  className,
  value,
}) {
  return (
    <Controller
      rules={rules}
      control={control}
      name={name}
      value={value}
      render={({ field, fieldState }) => (
        <div className={` flex flex-row gap-2 p-1`}>
          <input
            onChange={field.onChange}
            className={`${className} rounded-sm  focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50`}
            type={type}
            name={field.name}
            value={value}
          />
          <label className="font-bah">{label}</label>

          {fieldState.error && (
            <label className="text-red-600 text-xs py-1">
              {fieldState.error.message}
            </label>
          )}
        </div>
      )}
    />
  );
}
