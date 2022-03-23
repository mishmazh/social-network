import { combineReducers } from "redux";
import usersReducer from "./reducers/users";

const rootReducer = combineReducers({
  usersPage: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
