import { FC } from "react";
import { IUser } from "../../../types/usersTypes";
import UserItem from "./UserItem/UserItem";
import classes from "./UsersList.module.scss";

interface UsersListProps {
  users: IUser[];
  totalUsersCount: number;
}

const UsersList: FC<UsersListProps> = ({ users, totalUsersCount }) => {
  return (
    <div className={classes.UsersList}>
      <div className={classes.peopleCount}>
        Люди: <strong>{totalUsersCount}</strong>
      </div>
      <div>
        {users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
