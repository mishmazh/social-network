import { AuthAction, AuthActionTypes, AuthState } from "../../types/authTypes";

const initialState: AuthState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: "",
};

const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case AuthActionTypes.FETCH_CAPTCHA_URL_SUCCESS:
      return { ...state, captcha: action.payload };
    default:
      return state;
  }
};

export default authReducer;
