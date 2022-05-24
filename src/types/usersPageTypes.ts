export interface IPhotos {
  small: string | null;
  large: string | null;
}

export interface IUser {
  id: number;
  name: string;
  photos: IPhotos;
  status: string | null;
  followed: boolean;
}

export interface IUsersData {
  items: IUser[];
  totalCount: number;
  error: string | null;
}

export interface IFollowingData {
  data: {};
  fieldsErrors: string[];
  messages: string[];
  resultCode: number;
}

export interface UsersState {
  users: IUser[];
  totalUsersCount: number;
  currentPage: number;
  pageSize: number;
  isPageLoading: boolean;
  isFollowLoading: number[];
}

export enum UsersActionTypes {
  SET_PAGE_LOADING = "USERS/SET_PAGE_LOADING",
  SET_USERS = "USERS/SET_USERS",
  SET_TOTAL_USERS_COUNT = "USERS/SET_TOTAL_USERS_COUNT",
  SET_CURRENT_PAGE = "USERS/SET_CURRENT_PAGE",
  FOLLOW_USER = "USERS/FOLLOW_USER",
  UNFOLLOW_USER = "USERS/UNFOLLOW_USER",
  SET_FOLLOW_LOADING = "USERS/SET_FOLLOW_LOADING",
}

interface SetPageLoadingAction {
  type: UsersActionTypes.SET_PAGE_LOADING;
  payload: boolean;
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

interface followUserAction {
  type: UsersActionTypes.FOLLOW_USER;
  payload: number;
}

interface unfollowUserAction {
  type: UsersActionTypes.UNFOLLOW_USER;
  payload: number;
}

interface SetFollowLoadingAction {
  type: UsersActionTypes.SET_FOLLOW_LOADING;
  isLoading: boolean;
  userId: number;
}

export type UsersAction =
  | SetPageLoadingAction
  | SetUsersAction
  | SetTotalUsersCountAction
  | SetCurrentPageAction
  | followUserAction
  | unfollowUserAction
  | SetFollowLoadingAction;
