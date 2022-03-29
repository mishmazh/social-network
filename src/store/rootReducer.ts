import { combineReducers } from "redux";
import authReducer from "./reducers/auth";
import profileReducer from "./reducers/profile";
import usersReducer from "./reducers/users";

export const rootReducer = combineReducers({
  usersPage: usersReducer,
  profilePage: profileReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
