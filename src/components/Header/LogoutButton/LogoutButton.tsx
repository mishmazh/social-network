import { FC } from "react";
import classes from "./LogoutButton.module.scss";

interface LogoutButtonProps {
  userLogin: string | null;
  logoutHandler: () => void;
}

const LogoutButton: FC<LogoutButtonProps> = ({ userLogin, logoutHandler }) => {
  return (
    <div className={classes.LogoutButton}>
      {userLogin}
      <div className={classes.logout} onClick={logoutHandler}>
        <i className="fa-solid fa-right-from-bracket" />
      </div>
    </div>
  );
};

export default LogoutButton;
