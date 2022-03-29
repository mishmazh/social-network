import { FC } from "react";
import { IProfileData } from "../../types/profileTypes";
import classes from "./Header.module.scss";
import LogoutButton from "./LogoutButton/LogoutButton";

interface HeaderProps {
  userLogin: string | null;
  isAuth: boolean;
}

const Header: FC<HeaderProps> = ({ userLogin, isAuth }) => {
  return (
    <div className={classes.Header}>
      <div>
        <LogoutButton userLogin={userLogin} isAuth={isAuth} />
      </div>
    </div>
  );
};

export default Header;
