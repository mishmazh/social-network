import { ComponentType, FC } from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

interface InputProps {
  label?: string;
  type: string;
  name: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ label, name, ...props }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field
        className="mt-3 text-xs p-2 rounded text-black-500 bg-grey"
        id={name}
        name={name}
        {...props}
      />
      <ErrorMessage name={name} component={TextError as ComponentType} />
    </>
  );
};

export default Input;
