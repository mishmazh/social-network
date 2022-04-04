import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../../../types/usersTypes";
import classes from "./UserItem.module.scss";
import userAvatar from "../../../../assets/noUserAvatar.png";

interface UserItemProps {
  user: IUser;
  isFollowLoading: number[];
  followUser: (userId: number) => void;
  unfollowUser: (userId: number) => void;
}

const UserItem: FC<UserItemProps> = ({
  user,
  isFollowLoading,
  followUser,
  unfollowUser,
}) => {
  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate("/profile/" + user.id);
  };

  const followButton = (
    <button
      onClick={() => followUser(user.id)}
      disabled={isFollowLoading.some((id) => id === user.id)}
    >
      Подписаться
    </button>
  );

  const unfollowButton = (
    <button
      onClick={() => unfollowUser(user.id)}
      disabled={isFollowLoading.some((id) => id === user.id)}
    >
      Отписаться
    </button>
  );

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

        <div>{user.followed ? unfollowButton : followButton}</div>
      </div>
    </div>
  );
};

export default UserItem;
