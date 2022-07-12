import { AppAction, AppActionTypes } from "../../models/appModels";

interface AppState {
  isInit: boolean;
}

const initialState: AppState = {
  isInit: false,
};

const appReducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case AppActionTypes.APP_INIT:
      return {
        ...state,
        isInit: true,
      };
    default:
      return state;
  }
};

export default appReducer;
