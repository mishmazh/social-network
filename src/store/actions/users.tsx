import axios from "axios";
import { Dispatch } from "react";
import { UsersAction, UsersActionTypes } from "../../types/usersTypes";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    const response = await axios.get(
      "https://social-network.samuraijs.com/api/1.0/users"
    );

    dispatch({
      type: UsersActionTypes.FETCH_USERS,
      payload: response.data.items,
    });
  };
};
