import { combineReducers } from "redux";
import usersReducer from "./reducers/users";

export const rootReducer = combineReducers({
  usersPage: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
