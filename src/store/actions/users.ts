import { Dispatch } from "react";
import {
  IFollowingData,
  IUser,
  UsersAction,
  UsersActionTypes,
} from "../../types/usersTypes";
import { usersPageApi } from "../../api/api";
import { ActionCreator } from "redux";
import { AxiosPromise } from "axios";

export const fetchUsers =
  (currentPage: number, pageSize: number) =>
  async (dispatch: Dispatch<UsersAction>) => {
    let response;
    dispatch(setPageLoading(true));
    dispatch(setCurrentPage(currentPage));

    response = await usersPageApi.fetchUsers(currentPage, pageSize);
    const data = response.data;

    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setUsers(data.items));

    dispatch(setPageLoading(false));
  };

const setUsers = (users: IUser[]): UsersAction => ({
  type: UsersActionTypes.SET_USERS,
  payload: users,
});

const setPageLoading = (isLoading: boolean): UsersAction => ({
  type: UsersActionTypes.SET_PAGE_LOADING,
  payload: isLoading,
});

const setTotalUsersCount = (usersCount: number): UsersAction => ({
  type: UsersActionTypes.SET_TOTAL_USERS_COUNT,
  payload: usersCount,
});

const setCurrentPage = (currentPage: number): UsersAction => ({
  type: UsersActionTypes.SET_CURRENT_PAGE,
  payload: currentPage,
});

// ---------- FOLLOW-UNFOLLOW ---------- //
export const followUser =
  (userId: number) => async (dispatch: Dispatch<UsersAction>) => {
    await setFollowing(
      dispatch,
      userId,
      usersPageApi.follow,
      followUserSuccess
    );
  };

export const unfollowUser =
  (userId: number) => async (dispatch: Dispatch<UsersAction>) => {
    await setFollowing(
      dispatch,
      userId,
      usersPageApi.unfollow,
      unfollowUserSuccess
    );
  };

const setFollowing = async (
  dispatch: Dispatch<UsersAction>,
  userId: number,
  apiMethod: (userId: number) => AxiosPromise<IFollowingData>,
  actionCreator: ActionCreator<UsersAction>
) => {
  dispatch(setFollowLoading(true, userId));
  const response = await apiMethod(userId);

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }

  dispatch(setFollowLoading(false, userId));
};

const followUserSuccess = (userId: number): UsersAction => ({
  type: UsersActionTypes.FOLLOW_USER,
  payload: userId,
});

const unfollowUserSuccess = (userId: number): UsersAction => ({
  type: UsersActionTypes.UNFOLLOW_USER,
  payload: userId,
});

const setFollowLoading = (isLoading: boolean, userId: number): UsersAction => ({
  type: UsersActionTypes.SET_FOLLOW_LOADING,
  isLoading,
  userId,
});
