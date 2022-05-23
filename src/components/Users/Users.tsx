import { FC, useEffect } from "react";
import UserItem from "./UserItem";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import Paginator from "../UI/Paginator";
import Loader from "../UI/Loader";

interface PeopleListProps {
  isFriend: boolean;
  people: string;
}

const Users: FC<PeopleListProps> = ({ isFriend, people }) => {
  const {
    users,
    totalUsersCount,
    currentPage,
    pageSize,
    isFollowLoading,
    isPageLoading,
  } = useTypedSelector((state) => state.usersPage);

  const { fetchUsers, followUser, unfollowUser } = useActions();

  useEffect(() => {
    fetchUsers(currentPage, pageSize, isFriend);
  }, [isFriend]);

  const changePage = (pageNumber: number) => {
    fetchUsers(pageNumber, pageSize, isFriend);
  };

  return (
    <div className="row-start-2 row-end-3 col-start-3 col-end-4 dark-gradient text-white-500 p-5 rounded mb-3">
      {isPageLoading ? (
        <Loader />
      ) : (
        <>
          <Paginator
            totalUsersCount={totalUsersCount}
            portionSize={10}
            currentPage={currentPage}
            changePage={changePage}
          />
          <div className="my-9">
            <div className="text-sm pl-1">
              {people}: <strong className="pl-1">{totalUsersCount}</strong>
            </div>

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
          <Paginator
            totalUsersCount={totalUsersCount}
            portionSize={10}
            currentPage={currentPage}
            changePage={changePage}
          />
        </>
      )}
    </div>
  );
};

export default Users;
