import axios from "axios";
import { Dispatch } from "react";
import {
  IUser,
  IUsersData,
  UsersAction,
  UsersActionTypes,
} from "../../types/usersTypes";

export const fetchUsers =
  (currentPage: number, pageSize: number) =>
  async (dispatch: Dispatch<UsersAction>) => {
    dispatch(setLoading());
    dispatch(setCurrentPage(currentPage));

    const response = await axios.get<IUsersData>(
      `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
    );
    const data = response.data;

    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setUsers(data.items));
  };

const setUsers = (users: IUser[]): UsersAction => {
  return { type: UsersActionTypes.SET_USERS, payload: users };
};

const setLoading = (): UsersAction => {
  return { type: UsersActionTypes.SET_LOADING };
};

const setTotalUsersCount = (usersCount: number): UsersAction => {
  return { type: UsersActionTypes.SET_TOTAL_USERS_COUNT, payload: usersCount };
};

const setCurrentPage = (currentPage: number): UsersAction => {
  return { type: UsersActionTypes.SET_CURRENT_PAGE, payload: currentPage };
};
