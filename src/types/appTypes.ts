export interface AppState {
  isInit: boolean;
}

export enum AppActionTypes {
  APP_INIT = "app/APP_INIT",
}

interface AppInitAction {
  type: AppActionTypes.APP_INIT;
}

export type AppAction = AppInitAction;
