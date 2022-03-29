import { FC } from "react";
import { IProfileData } from "../../../types/profileTypes";
import classes from "./LogoutButton.module.scss";

interface LogoutButtonProps {
  userLogin: string | null;
  isAuth: boolean;
}

const LogoutButton: FC<LogoutButtonProps> = ({ userLogin, isAuth }) => {
  return (
    <div className={classes.LogoutButton}>
      <button>Выйти</button>
      <div>{userLogin}</div>
    </div>
  );
};

export default LogoutButton;
