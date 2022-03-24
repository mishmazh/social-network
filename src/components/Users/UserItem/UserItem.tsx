import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../../types/usersTypes";
import classes from "./UserItem.module.scss";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate("/profile/" + user.id);
  };

  return (
    <div className={classes.UserItem}>
      <img
        className={classes.userPhoto}
        onClick={navigateToProfile}
        src={user.photos.small}
        alt="userImg"
      />
      <div className={classes.descBlock}>
        <div>
          <div className={classes.name}>
            <strong onClick={navigateToProfile}>{user.name}</strong>
          </div>
          <div className={classes.status}>{user.status}</div>
        </div>

        <div>
          <button>Подписаться</button>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
