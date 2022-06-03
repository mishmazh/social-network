import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReducer from "./reducers/auth";
import profileReducer from "./reducers/profile";
import usersReducer from "./reducers/users";
import appReducer from "./reducers/app";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
  usersPage: usersReducer,
  profilePage: profileReducer,
  auth: authReducer,
  app: appReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
