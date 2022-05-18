import { ComponentType, FC } from "react";
import classes from "./Input.module.scss";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError/TextError";

interface InputProps {
  label?: string;
  type: string;
  name: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ label, name, ...props }) => {
  return (
    <div className={classes.Input}>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...props} />
      <ErrorMessage name={name} component={TextError as ComponentType} />
    </div>
  );
};

export default Input;
