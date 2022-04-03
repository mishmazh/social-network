import { Dispatch } from "react";
import { IUser, UsersAction, UsersActionTypes } from "../../types/usersTypes";
import { usersPageApi } from "../../api/api";

export const fetchUsers =
  (currentPage: number, pageSize: number) =>
  async (dispatch: Dispatch<UsersAction>) => {
    dispatch(setLoading(true));
    dispatch(setCurrentPage(currentPage));

    const response = await usersPageApi.fetchUsers(currentPage, pageSize);
    const data = response.data;

    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setUsers(data.items));

    dispatch(setLoading(false));
  };

const setUsers = (users: IUser[]): UsersAction => {
  return { type: UsersActionTypes.SET_USERS, payload: users };
};

const setLoading = (isLoading: boolean): UsersAction => {
  return { type: UsersActionTypes.SET_LOADING, payload: isLoading };
};

const setTotalUsersCount = (usersCount: number): UsersAction => {
  return { type: UsersActionTypes.SET_TOTAL_USERS_COUNT, payload: usersCount };
};

const setCurrentPage = (currentPage: number): UsersAction => {
  return { type: UsersActionTypes.SET_CURRENT_PAGE, payload: currentPage };
};
