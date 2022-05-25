import { AppAction, AppActionTypes, AppState } from "../../types/appTypes";

const initialState: AppState = {
  isAppInit: false,
};

const appReducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case AppActionTypes.IS_APP_INIT:
      return {
        ...state,
        isAppInit: true,
      };
    default:
      return state;
  }
};

export default appReducer;
