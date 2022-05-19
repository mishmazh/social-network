import { FC } from "react";
import { IUser } from "../../types/usersPageTypes";
import UserItem from "./UserItem";

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
    <>
      <div className="text-sm pl-1">
        People: <strong className="pl-1">{totalUsersCount}</strong>
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
    </>
  );
};

export default UsersList;
