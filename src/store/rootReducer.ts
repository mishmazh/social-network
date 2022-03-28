import { combineReducers } from "redux";
import profileReducer from "./reducers/profile";
import usersReducer from "./reducers/users";

export const rootReducer = combineReducers({
  usersPage: usersReducer,
  profilePage: profileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
