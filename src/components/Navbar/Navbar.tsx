import { FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";

const Navbar: FC = () => {
  return (
    <div className={classes.Navbar}>
      <div>
        <NavLink to="/profile">Профиль</NavLink>
      </div>
      <div>
        <NavLink to="/users">Пользователи</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
