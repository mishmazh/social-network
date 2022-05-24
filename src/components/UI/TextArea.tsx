import React, { ComponentType, FC } from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

interface TextareaProps {
  label?: string;
  type: string;
  name: string;
  placeholder?: string;
}

const Textarea: FC<TextareaProps> = ({ label, name, ...props }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field
        className="text-black-500 w-full p-2 rounded text-sm resize-none h-14"
        as="textarea"
        id={name}
        name={name}
        {...props}
      />
      <ErrorMessage name={name} component={TextError as ComponentType} />
    </>
  );
};

export default Textarea;
