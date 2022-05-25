export interface AppState {
  isAppInit: boolean;
}

export enum AppActionTypes {
  IS_APP_INIT = "app/IS_APP_INIT",
}

interface isAppInitAction {
  type: AppActionTypes.IS_APP_INIT;
}

export type AppAction = isAppInitAction;
