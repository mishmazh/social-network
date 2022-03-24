export interface IPhotos {
  small?: string;
  large?: string;
}

export interface IUser {
  id: number;
  name: string;
  photos: IPhotos;
  status?: string;
  followed: boolean;
}

export interface UsersState {
  users: IUser[];
  totalUsersCount: number;
  error?: string;
  isLoading: boolean;
}

export enum UsersActionTypes {
  SET_LOADING = "SET_LOADING",
  FETCH_USERS = "FETCH_USERS",
  SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
}

interface SetLoadingAction {
  type: UsersActionTypes.SET_LOADING;
}

interface FetchUsersAction {
  type: UsersActionTypes.FETCH_USERS;
  payload: IUser[];
}

interface SetTotalUsersCountAction {
  type: UsersActionTypes.SET_TOTAL_USERS_COUNT;
  payload: number;
}

export type UsersAction = SetLoadingAction | FetchUsersAction | SetTotalUsersCountAction;
