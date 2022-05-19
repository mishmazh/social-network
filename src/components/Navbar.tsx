import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Navbar: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[160px] pr-3">
      <div className="navbar-button" onClick={() => navigate("/profile")}>
        My profile
      </div>
      <div className="navbar-button" onClick={() => navigate("/users")}>
        Users
      </div>
    </div>
  );
};

export default Navbar;
