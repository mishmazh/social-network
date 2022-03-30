import axios from "axios";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import {
  AuthAction,
  AuthActionTypes,
  IAuthFormValues,
  IAuthLoginData,
  IAuthLogoutData,
  IAuthMeData,
} from "../../types/authTypes";

export const fetchAuthUserData =
  () => async (dispatch: Dispatch<AuthAction>) => {
    const response = await axios.get<IAuthMeData>(
      "https://social-network.samuraijs.com/api/1.0/auth/me",
      { withCredentials: true }
    );
    const data = response.data;

    if (data.resultCode === 0) {
      const { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  };

const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): AuthAction => {
  return {
    type: AuthActionTypes.SET_AUTH_USER_DATA,
    payload: { userId, email, login, isAuth },
  };
};

export const authAttempt =
  (values: IAuthFormValues) =>
  async (dispatch: ThunkDispatch<{}, {}, AuthAction>) => {
    const response = await axios.post<IAuthLoginData>(
      "https://social-network.samuraijs.com/api/1.0/auth/login",
      values,
      { withCredentials: true }
    );
    const data = response.data;

    if (data.resultCode === 0) {
      dispatch(fetchAuthUserData());
    }
  };

export const logoutAttempt = () => async (dispatch: Dispatch<AuthAction>) => {
  const response = await axios.delete<IAuthLogoutData>(
    "https://social-network.samuraijs.com/api/1.0/auth/login",
    { withCredentials: true }
  );

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
