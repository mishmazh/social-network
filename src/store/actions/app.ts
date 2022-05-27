import { AppAction, AppActionTypes } from "../../types/appTypes";
import { fetchAuthUserData } from "./auth";
import { ThunkDispatch } from "redux-thunk";

const appInitSuccess = () => ({
  type: AppActionTypes.IS_APP_INIT,
});

export const appInit = () => (dispatch: ThunkDispatch<{}, {}, AppAction>) => {
  const promise = dispatch(fetchAuthUserData());

  Promise.all([promise]).then(() => dispatch(appInitSuccess()));
};
