import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../../../types/usersPageTypes";
import classes from "./UserItem.module.scss";
import userAvatar from "../../../../assets/noUserAvatar.png";
import Loader from "../../../UI/Loader/Loader";
import { sliceString } from "../../../../helpers/stringHelpers";

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
      {isFollowLoading.some((id) => id === user.id) ? (
        <Loader />
      ) : (
        "Подписаться"
      )}
    </button>
  );

  const unfollowButton = (
    <button
      onClick={() => unfollowUser(user.id)}
      disabled={isFollowLoading.some((id) => id === user.id)}
    >
      {isFollowLoading.some((id) => id === user.id) ? <Loader /> : "Отписаться"}
    </button>
  );

  // const sliceStatus =
  //   user.status !== null && user.status.length > 100
  //     ? user.status.slice(0, -60) + "..."
  //     : user.status;

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
          <div className={classes.status}>{sliceString(user.status, 100)}</div>
        </div>

        <div>{user.followed ? unfollowButton : followButton}</div>
      </div>
    </div>
  );
};

export default UserItem;
