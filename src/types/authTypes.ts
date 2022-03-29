export interface IAuth {
  id: number;
  email: string;
  login: string;
}

export interface IAuthData {
  resultCode: number;
  messages: string[];
  data: IAuth;
}

export interface AuthState {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  captchaUrl: string | null;
}

export enum AuthActionTypes {
  SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA",
}

interface setAuthUserData {
  type: AuthActionTypes.SET_AUTH_USER_DATA;
  payload: { userId: number; email: string; login: string; isAuth: boolean };
}

export type AuthAction = setAuthUserData;
