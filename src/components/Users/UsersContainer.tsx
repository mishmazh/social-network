import { FC, useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Paginator from "../UI/Paginator";
import Loader from "../UI/Loader";
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
    <div className="dark-gradient w-full text-white-500 p-5 rounded mb-3">
      <Paginator
        totalUsersCount={totalUsersCount}
        portionSize={10}
        currentPage={currentPage}
        changePage={changePage}
      />
      {isPageLoading ? (
        <Loader className="h-screen" />
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
