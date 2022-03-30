import { FC } from "react";
import { useActions } from "../../hooks/useActions";
import classes from "./Header.module.scss";
import LogoutButton from "./LogoutButton/LogoutButton";

interface HeaderProps {
  userLogin: string | null;
  isAuth: boolean;
}

const Header: FC<HeaderProps> = ({ userLogin, isAuth }) => {
  const { logoutAttempt } = useActions();

  const logoutHandler = () => {
    logoutAttempt();
  };

  return (
    <div className={classes.Header}>
      <div>
        <LogoutButton
          userLogin={userLogin}
          isAuth={isAuth}
          logoutHandler={logoutHandler}
        />
      </div>
    </div>
  );
};

export default Header;
