import { FC } from "react";
import classes from "./Modal.module.scss";

const Modal: FC = ({ children }) => {
  return <div className={classes.Modal}>{children}</div>;
};

export default Modal;
