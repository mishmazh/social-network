import { AppAction, AppActionTypes } from "../../types/appTypes";
import { Dispatch } from "react";
import { fetchAuthUserData } from "./auth";

const appInitSuccess = () => ({
  type: AppActionTypes.IS_APP_INIT,
});

export const appInit = () => (dispatch: Dispatch<AppAction>) => {
  const promise = dispatch(fetchAuthUserData() as any);

  Promise.all([promise]).then(() => dispatch(appInitSuccess()));
};
