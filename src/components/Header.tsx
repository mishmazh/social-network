import { FC } from "react";

interface HeaderProps {
  isAuth: boolean;
  logoutHandler: () => void;
  navigate: (route: string) => void;
}

const Header: FC<HeaderProps> = ({ isAuth, logoutHandler, navigate }) => (
  <header className="row-start-1 row-end-2 col-start-1 col-end-6 dark-gradient h-[45px] grid place-items-center">
    <ul className="flex gap-3 sm:hidden">
      {isAuth && (
        <li className="nav-btn" onClick={() => navigate("/profile")}>
          My profile
        </li>
      )}

      <li className="nav-btn" onClick={() => navigate("/users")}>
        Users
      </li>

      {isAuth && (
        <li className="nav-btn" onClick={logoutHandler}>
          Logout
        </li>
      )}

      {!isAuth && (
        <li className="nav-btn" onClick={() => navigate("/")}>
          Login
        </li>
      )}
    </ul>
  </header>
);

export default Header;
