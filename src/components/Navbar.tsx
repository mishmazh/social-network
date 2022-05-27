import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  isAuth: boolean;
  logoutHandler: () => void;
}

const Navbar: FC<NavbarProps> = ({ isAuth, logoutHandler }) => {
  const navigate = useNavigate();

  return (
    <nav className="row-start-2 row-end-3 col-start-2 col-end-3 sm:inline xs:hidden">
      <ul>
        {isAuth && (
          <li className="nav-btn" onClick={() => navigate("/profile")}>
            My profile
          </li>
        )}

        <li className="nav-btn" onClick={() => navigate("/users")}>
          Users
        </li>

        {isAuth && (
          <li className="nav-btn mt-5" onClick={logoutHandler}>
            Logout
          </li>
        )}

        {!isAuth && (
          <li className="nav-btn" onClick={() => navigate("/")}>
            Login
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
