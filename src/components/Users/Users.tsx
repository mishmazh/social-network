import { FC, useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import UserItem from "./UserItem/UserItem";
import classes from "./Users.module.scss";

const Users: FC = () => {
  const { users, totalUsersCount, currentPage, pageSize, isLoading } =
    useTypedSelector((state) => state.usersPage);
  const { fetchUsers, setCurrentPage } = useActions();

  useEffect(() => {
    fetchUsers(currentPage, pageSize);
  }, [currentPage]);

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  let pagesCount = Math.ceil(totalUsersCount / 10);
  let pages = [];

  for (let i = 1; i < pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={classes.Users}>
      {pages.map((page) => {
        return <span onClick={() => setCurrentPage(page)}>{page}</span>;
      })}
      Люди: <strong>{totalUsersCount}</strong>
      <div>
        {users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Users;
