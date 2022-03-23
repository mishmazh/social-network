export interface UsersState {
  users: any[];
  totalUsersCount: number;
  error?: string;
  isLoading: boolean;
}

export enum UsersActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
}

interface FetchUsersAction {
  type: UsersActionTypes.FETCH_USERS;
  payload: object[];
}

interface FetchUsersSuccessAction {
  type: UsersActionTypes.FETCH_USERS_SUCCESS;
}

export type UsersAction = FetchUsersAction | FetchUsersSuccessAction;
