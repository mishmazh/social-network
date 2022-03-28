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
  currentPage: number;
  pageSize: number;
  error?: string;
  isLoading: boolean;
}

export enum UsersActionTypes {
  SET_LOADING = "SET_LOADING",
  SET_USERS = "SET_USERS",
  SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
}

interface SetLoadingAction {
  type: UsersActionTypes.SET_LOADING;
}

interface SetUsersAction {
  type: UsersActionTypes.SET_USERS;
  payload: IUser[];
}

interface SetTotalUsersCountAction {
  type: UsersActionTypes.SET_TOTAL_USERS_COUNT;
  payload: number;
}

interface SetCurrentPageAction {
  type: UsersActionTypes.SET_CURRENT_PAGE;
  payload: number;
}

export type UsersAction =
  | SetLoadingAction
  | SetUsersAction
  | SetTotalUsersCountAction
  | SetCurrentPageAction;
