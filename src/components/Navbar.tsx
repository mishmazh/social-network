import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  logoutHandler: () => void;
}

const Navbar: FC<NavbarProps> = ({ logoutHandler }) => {
  const navigate = useNavigate();

  return (
    <nav className="row-start-2 row-end-3 col-start-2 col-end-3">
      <div className="navbar-button" onClick={() => navigate("/profile")}>
        My profile
      </div>
      <div className="navbar-button" onClick={() => navigate("/users")}>
        Users
      </div>
      <div className="navbar-button" onClick={() => navigate("/followers")}>
        Followers
      </div>
      <div className="navbar-button mt-5" onClick={logoutHandler}>
        Logout
      </div>
    </nav>
  );
};

export default Navbar;
