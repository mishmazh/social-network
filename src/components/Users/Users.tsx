import { FC, useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Paginator from "../UI/Paginator/Paginator";
import classes from "./Users.module.scss";
import Loader from "../UI/Loader/Loader";
import UsersList from "./UsersList/UsersList";

const Users: FC = () => {
  const {
    users,
    totalUsersCount,
    currentPage,
    pageSize,
    isPageLoading,
    isFollowLoading,
  } = useTypedSelector((state) => state.usersPage);

  const { fetchUsers, followUser, unfollowUser } = useActions();

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
      {isPageLoading ? (
        <Loader />
      ) : (
        <UsersList
          users={users}
          totalUsersCount={totalUsersCount}
          isFollowLoading={isFollowLoading}
          followUser={followUser}
          unfollowUser={unfollowUser}
        />
      )}
    </div>
  );
};

export default Users;
