import { FC, useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Paginator from "../UI/Paginator";
import Loader from "../UI/Loader/Loader";
import UsersList from "./UsersList";

const UsersContainer: FC = () => {
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

    return () => {
      fetchUsers(currentPage, pageSize);
    };
  }, []);

  const changePage = (pageNumber: number) => {
    fetchUsers(pageNumber, pageSize);
  };

  return (
    <div className="dark-gradient w-full text-white p-5 rounded mb-3">
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

export default UsersContainer;
