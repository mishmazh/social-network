import { FC } from "react";
import classes from "./Button.module.scss";

interface ButtonProps {
  classType: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ classType, children, ...props }) => {
  const cls = [classes.Button, classes[classType]];

  return (
    <button className={cls.join(" ")} {...props}>
      {children}
    </button>
  );
};

export default Button;
