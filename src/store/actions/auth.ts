import axios from "axios";
import { Dispatch } from "react";
import { AuthAction, AuthActionTypes, IAuthData } from "../../types/authTypes";

export const fetchAuthUserData =
  () => async (dispatch: Dispatch<AuthAction>) => {
    const response = await axios.get<IAuthData>(
      "https://social-network.samuraijs.com/api/1.0/auth/me",
      { withCredentials: true }
    );
    const data = response.data;

    if (data.resultCode === 0) {
      const { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }

    console.log(data);
  };

const setAuthUserData = (
  userId: number,
  email: string,
  login: string,
  isAuth: boolean
): AuthAction => {
  return {
    type: AuthActionTypes.SET_AUTH_USER_DATA,
    payload: { userId, email, login, isAuth },
  };
};
