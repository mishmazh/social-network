import { FC } from "react";
import classes from "./TextError.module.scss";

const TextError: FC = ({ children }) => (
  <div className={classes.Error}>{children}</div>
);

export default TextError;
