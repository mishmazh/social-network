import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../../../types/usersTypes";
import classes from "./UserItem.module.scss";
import userAvatar from "../../../../assets/noUserAvatar.png";

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
        className={classes.userAvatar}
        onClick={navigateToProfile}
        src={user.photos.small != null ? user.photos.small : userAvatar}
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
