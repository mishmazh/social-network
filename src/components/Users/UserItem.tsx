import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../types/usersPageTypes";
import userAvatar from "../../assets/noUserAvatar.png";
import Loader from "../UI/Loader/Loader";
import { sliceString } from "../../helpers/stringHelpers";
import Button from "../UI/Button";

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
      className="py-2 px-3 text-xs rounded w-28 disabled:bg-transparent"
    >
      {isFollowLoading.some((id) => id === user.id) ? <Loader /> : "Follow"}
    </Button>
  );

  const unfollowButton = (
    <Button
      onClick={() => unfollowUser(user.id)}
      disabled={isFollowLoading.some((id) => id === user.id)}
      className="py-2 px-3 text-xs rounded w-28 disabled:bg-transparent"
    >
      {isFollowLoading.some((id) => id === user.id) ? <Loader /> : "Unfollow"}
    </Button>
  );

  return (
    <div className="flex pt-5">
      <img
        className="rounded cursor-pointer w-16 h-16 mr-3"
        onClick={navigateToProfile}
        src={user.photos.small != null ? user.photos.small : userAvatar}
        alt="userImg"
      />

      <div className="flex justify-between w-full pt-1">
        <div>
          <div className="text-lg pb-0.5">
            <strong className="cursor-pointer" onClick={navigateToProfile}>
              {user.name}
            </strong>
          </div>
          <div className="text-xs">{sliceString(user.status, 100)}</div>
        </div>

        <div>{user.followed ? unfollowButton : followButton}</div>
      </div>
    </div>
  );
};

export default UserItem;
