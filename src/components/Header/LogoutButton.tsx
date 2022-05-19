import { FC } from "react";

interface LogoutButtonProps {
  userLogin: string | null;
  logoutHandler: () => void;
}

const LogoutButton: FC<LogoutButtonProps> = ({ userLogin, logoutHandler }) => {
  return (
    <div className="flex justify-center items-center text-white">
      <div className="text-sm pb-1">{userLogin}</div>
      <div
        className="cursor-pointer pl-2 pr-3 text-2xl"
        onClick={logoutHandler}
      >
        <i className="fa-solid fa-right-from-bracket" />
      </div>
    </div>
  );
};

export default LogoutButton;
