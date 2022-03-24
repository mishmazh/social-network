import { FC, useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import UserItem from "./UserItem/UserItem";
import classes from "./Users.module.scss";

const Users: FC = () => {
  const { users, totalUsersCount, isLoading } = useTypedSelector(
    (state) => state.usersPage
  );
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  return (
    <div className={classes.Users}>
      Люди: <strong>{totalUsersCount}</strong>
      <div>
        {users.map((user) => (
          <>
            <UserItem user={user} key={user.id} />
            <hr />
          </>
        ))}
      </div>
    </div>
  );
};

export default Users;
