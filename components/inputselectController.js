import React from "react";
import { Controller } from "react-hook-form";
import InputController from "../components/InputController";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export default function InputselectContoller({ name, label, type, control, rules,className ,options}) {
  return (
    <Controller
      rules={rules}
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        // <div className="flex flex-col p-1">
        //   <label className="font-bah">{label}</label>
        //   <input
          
        //     className={`${className} rounded-sm border-zinc-200 focus:border-green-700 focus:ring focus:ring-blue focus:ring-opacity-50`}
        //     type={type}
        //   />
          
        //   {fieldState.error && (
        //     <label className="text-red-600 text-xs py-1">
        //       {fieldState.error.message}
        //     </label>
        //   )}
        
        // </div>

        <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        onChange={field.onChange}
        options={options}
        {...register("Industryexperience", {
          required: true,
        })}
      />
      )}
    />
  );
}
