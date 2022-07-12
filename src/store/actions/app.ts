import { AppAction, AppActionTypes } from "../../models/appModels";
import { fetchAuthMe } from "./auth";
import { ThunkDispatch } from "redux-thunk";

const appInitSuccess = () => ({
  type: AppActionTypes.APP_INIT,
});

export const appInit = () => (dispatch: ThunkDispatch<{}, {}, AppAction>) => {
  const promise = dispatch(fetchAuthMe());

  Promise.all([promise]).then(() => dispatch(appInitSuccess()));
};
