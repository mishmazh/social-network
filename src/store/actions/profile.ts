import { Dispatch } from "react";
import { ThunkDispatch } from "redux-thunk";
import {
  IProfileData,
  ProfileAction,
  ProfileActionTypes,
} from "../../types/profilePageTypes";
import { profilePageApi } from "../../api/api";

// ---------- Profile page ---------- //
export const fetchProfile =
  (userId: string | undefined) =>
  async (dispatch: ThunkDispatch<{}, {}, ProfileAction>) => {
    dispatch(setLoading(true));
    const response = await profilePageApi.fetchProfile(userId);
    const data = response.data;

    dispatch(setProfileData(data));
    dispatch(setAvatar(data.photos.large));
    await dispatch(fetchStatus(userId));

    dispatch(setLoading(false));
  };

const setProfileData = (profileData: IProfileData): ProfileAction => {
  return { type: ProfileActionTypes.SET_PROFILE, payload: profileData };
};

const setAvatar = (avatar: string | null): ProfileAction => {
  return { type: ProfileActionTypes.SET_AVATAR, payload: avatar };
};

const setLoading = (isLoading: boolean): ProfileAction => {
  return { type: ProfileActionTypes.SET_LOADING, payload: isLoading };
};

// ---------- Profile status ---------- //
export const fetchStatus =
  (userId: string | undefined) => async (dispatch: Dispatch<ProfileAction>) => {
    const response = await profilePageApi.fetchStatus(userId);

    dispatch(setStatus(response.data));
  };

export const updateStatus =
  (status: string) => async (dispatch: Dispatch<ProfileAction>) => {
    const response = await profilePageApi.updateStatus(status);

    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };

const setStatus = (status: string): ProfileAction => {
  return { type: ProfileActionTypes.SET_STATUS, payload: status };
};