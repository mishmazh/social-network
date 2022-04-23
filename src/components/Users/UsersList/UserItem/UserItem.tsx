import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../../../types/usersPageTypes";
import classes from "./UserItem.module.scss";
import userAvatar from "../../../../assets/noUserAvatar.png";
import Loader from "../../../UI/Loader/Loader";
import { sliceString } from "../../../../helpers/stringHelpers";
import Button from "../../../UI/Button/Button";

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
    <Button
      onClick={() => followUser(user.id)}
      disabled={isFollowLoading.some((id) => id === user.id)}
      classType="subscribe"
    >
      {isFollowLoading.some((id) => id === user.id) ? (
        <Loader />
      ) : (
        "Подписаться"
      )}
    </Button>
  );

  const unfollowButton = (
    <Button
      onClick={() => unfollowUser(user.id)}
      disabled={isFollowLoading.some((id) => id === user.id)}
      classType="subscribe"
    >
      {isFollowLoading.some((id) => id === user.id) ? <Loader /> : "Отписаться"}
    </Button>
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
          <div className={classes.status}>{sliceString(user.status, 100)}</div>
        </div>

        <div>{user.followed ? unfollowButton : followButton}</div>
      </div>
    </div>
  );
};

export default UserItem;
