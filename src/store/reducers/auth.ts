import { AuthAction, AuthActionTypes, AuthState } from "../../types/authTypes";

const initialState: AuthState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.SET_AUTH_USER_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default authReducer;
