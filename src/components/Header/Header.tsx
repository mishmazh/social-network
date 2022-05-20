import { FC } from "react";
import { useActions } from "../../hooks/useActions";
import LogoutButton from "./LogoutButton";

interface HeaderProps {
  userLogin: string | null;
}

const Header: FC<HeaderProps> = ({ userLogin }) => {
  const { logoutAttempt } = useActions();

  const logoutHandler = () => {
    logoutAttempt();
  };

  return (
    <header className="flex justify-center dark-gradient h-12">
      <div className="flex justify-end items-center w-[920px]">
        <LogoutButton userLogin={userLogin} logoutHandler={logoutHandler} />
      </div>
    </header>
  );
};

export default Header;
