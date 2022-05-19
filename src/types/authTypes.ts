// ---------- Formik ---------- //
export interface IAuthFormValues {
  email: string;
  password: string;
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
  captchaUrl: string | null;
}

export enum AuthActionTypes {
  SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA",
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

export type AuthAction = setAuthUserData;
