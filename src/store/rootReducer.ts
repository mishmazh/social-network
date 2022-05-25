import { combineReducers } from "redux";
import authReducer from "./reducers/auth";
import profileReducer from "./reducers/profile";
import usersReducer from "./reducers/users";
import appReducer from "./reducers/app";

export const rootReducer = combineReducers({
  usersPage: usersReducer,
  profilePage: profileReducer,
  auth: authReducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
