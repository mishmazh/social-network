import { FC } from "react";
import classes from "./LogoutButton.module.scss";

interface LogoutButtonProps {
  userLogin: string | null;
  isAuth: boolean;
  logoutHandler: () => void;
}

const LogoutButton: FC<LogoutButtonProps> = ({
  userLogin,
  isAuth,
  logoutHandler,
}) => {
  return (
    <div className={classes.LogoutButton}>
      {isAuth && (
        <>
          <button onClick={logoutHandler}>Выйти</button>
          <div>{userLogin}</div>
        </>
      )}
    </div>
  );
};

export default LogoutButton;
