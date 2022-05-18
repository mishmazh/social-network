import { FC, ReactNode } from "react";
import classes from "./TextError.module.scss";

interface TextErrorProps {
  children: ReactNode;
}

const TextError: FC<TextErrorProps> = ({ children }) => (
  <div className={classes.Error}>{children}</div>
);

export default TextError;
