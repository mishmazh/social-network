import { Dispatch } from "react";
import { ThunkDispatch } from "redux-thunk";
import {
  AuthAction,
  AuthActionTypes,
  IAuthFormSubmit,
  IAuthFormValues,
} from "../../models/authModels";
import { authApi, securityApi } from "../../axios/axios";

// ---------- Auth me ---------- //
export const fetchAuthMe = () => async (dispatch: Dispatch<AuthAction>) => {
  const response = await authApi.authMe();
  const data = response.data;

  if (data.resultCode === 0) {
    const { id, email, login } = data.data;
    dispatch(setAuthMe(id, email, login, true));
  }
};

const setAuthMe = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): AuthAction => ({
  type: AuthActionTypes.SET_AUTH_ME,
  payload: { userId, email, login, isAuth },
});

// ---------- Login ---------- //
export const loginAttempt =
  (values: IAuthFormValues, { setStatus, setSubmitting }: IAuthFormSubmit) =>
  async (dispatch: ThunkDispatch<{}, {}, AuthAction>) => {
    const response = await authApi.login(values);
    const data = response.data;

    if (data.resultCode === 1) {
      setStatus({ message: data.messages[0] });
      setSubmitting(false);

      setTimeout(() => {
        setStatus("");
      }, 2500);
    } else if (data.resultCode === 10) {
      setSubmitting(false);

      await dispatch(fetchCaptcha());
    } else {
      await dispatch(fetchAuthMe());
    }
  };

// ---------- Logout ---------- //
export const logoutAttempt = () => async (dispatch: Dispatch<AuthAction>) => {
  const response = await authApi.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthMe(null, null, null, false));
  }
};

// ---------- Captcha ---------- //
export const fetchCaptcha = () => async (dispatch: Dispatch<AuthAction>) => {
  const response = await securityApi.fetchCaptchaUrl();

  dispatch(fetchCaptchaSuccess(response.data.url));
};

const fetchCaptchaSuccess = (captcha: string): AuthAction => ({
  type: AuthActionTypes.FETCH_CAPTCHA_SUCCESS,
  payload: captcha,
});
