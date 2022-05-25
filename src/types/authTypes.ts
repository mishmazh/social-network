// ---------- Formik ---------- //
export interface IAuthFormValues {
  email: string;
  password: string;
  captcha: string;
  // rememberMe: boolean;
}

export interface IAuthFormValidation {
  email: string;
  password: string;
}

export interface IAuthFormSubmit {
  setStatus: (message: {}) => void | string;
  setSubmitting: (submit: boolean) => void;
}

// ---------- Auth Data ---------- //
export interface IAuthMe {
  id: number;
  email: string;
  login: string;
}

export interface IAuthMeData {
  resultCode: number;
  messages: string[];
  data: IAuthMe;
}

export interface IAuthLoginData {
  resultCode: number;
  messages: string[];
  data: {
    userId: number;
  };
}

export interface IAuthLogoutData {
  data: {};
  fieldsErrors: string[];
  messages: string[];
  resultCode: number;
}

export interface AuthState {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  captcha: string;
}

export enum AuthActionTypes {
  SET_AUTH_USER_DATA = "auth/SET_AUTH_USER_DATA",
  FETCH_CAPTCHA_SUCCESS = "auth/FETCH_CAPTCHA_SUCCESS",
}

interface setAuthUserData {
  type: AuthActionTypes.SET_AUTH_USER_DATA;
  payload: {
    userId: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
  };
}

interface fetchCaptchaSuccess {
  type: AuthActionTypes.FETCH_CAPTCHA_SUCCESS;
  payload: string;
}

export type AuthAction = setAuthUserData | fetchCaptchaSuccess;
