import { FC } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Navbar.module.scss";

const Navbar: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.Navbar}>
      <div onClick={() => navigate("/profile")}>Мой профиль</div>
      <div onClick={() => navigate("/users")}>Пользователи</div>
    </div>
  );
};

export default Navbar;
