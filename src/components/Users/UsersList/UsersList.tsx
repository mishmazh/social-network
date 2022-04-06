import { FC } from "react";
import { IUser } from "../../../types/usersPageTypes";
import UserItem from "./UserItem/UserItem";
import classes from "./UsersList.module.scss";

interface UsersListProps {
  users: IUser[];
  totalUsersCount: number;
  isFollowLoading: number[];
  followUser: (userId: number) => void;
  unfollowUser: (userId: number) => void;
}

const UsersList: FC<UsersListProps> = ({
  users,
  totalUsersCount,
  isFollowLoading,
  followUser,
  unfollowUser,
}) => {
  return (
    <div className={classes.UsersList}>
      <div className={classes.peopleCount}>
        Люди: <strong>{totalUsersCount}</strong>
      </div>
      <div>
        {users.map((user) => (
          <UserItem
            user={user}
            isFollowLoading={isFollowLoading}
            followUser={followUser}
            unfollowUser={unfollowUser}
            key={user.id}
          />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
