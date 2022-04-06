import { FC } from "react";
import { useActions } from "../../hooks/useActions";
import classes from "./Header.module.scss";
import LogoutButton from "./LogoutButton/LogoutButton";

interface HeaderProps {
  userLogin: string | null;
}

const Header: FC<HeaderProps> = ({ userLogin }) => {
  const { logoutAttempt } = useActions();

  const logoutHandler = () => {
    logoutAttempt();
  };

  return (
    <div className={classes.Header}>
      <div>
        <LogoutButton userLogin={userLogin} logoutHandler={logoutHandler} />
      </div>
    </div>
  );
};

export default Header;
