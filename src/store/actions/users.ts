import axios from "axios";
import { Dispatch } from "react";
import { UsersAction, UsersActionTypes } from "../../types/usersTypes";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    dispatch(setLoading());

    const response = await axios.get(
      "https://social-network.samuraijs.com/api/1.0/users"
    );
    const data = response.data;

    dispatch(setTotalUsersCount(data.totalCount));

    dispatch({
      type: UsersActionTypes.FETCH_USERS,
      payload: data.items,
    });
  };
};

const setLoading = (): UsersAction => {
  return { type: UsersActionTypes.SET_LOADING };
};

const setTotalUsersCount = (usersCount: number): UsersAction => {
  return { type: UsersActionTypes.SET_TOTAL_USERS_COUNT, payload: usersCount };
};
