import { FC, useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import UserItem from "./UserItem/UserItem";
import Paginator from "../UI/Paginator/Paginator";
import classes from "./Users.module.scss";
import Loader from "../UI/Loader/Loader";

const Users: FC = () => {
  const { users, totalUsersCount, currentPage, pageSize, isLoading } =
    useTypedSelector((state) => state.usersPage);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers(currentPage, pageSize);
  }, []);

  const changePage = (pageNumber: number) => {
    fetchUsers(pageNumber, pageSize);
  };

  return (
    <div className={classes.Users}>
      <Paginator
        totalUsersCount={totalUsersCount}
        portionSize={10}
        changePage={changePage}
      />
      {isLoading && <Loader />}
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

export default Users;
