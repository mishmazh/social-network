import axios from "axios";
import { Dispatch } from "react";
import {
  IProfileData,
  ProfileAction,
  ProfileActionTypes,
} from "../../types/profileTypes";

export const fetchUserProfile =
  (userId: string | undefined) => async (dispatch: Dispatch<ProfileAction>) => {
    dispatch(setLoading());

    const response = await axios.get<IProfileData>(
      `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
    );

    dispatch(setUserProfile(response.data));
  };

const setUserProfile = (profileData: IProfileData): ProfileAction => {
  return { type: ProfileActionTypes.SET_USER_PROFILE, payload: profileData };
};

const setLoading = (): ProfileAction => {
  return { type: ProfileActionTypes.SET_LOADING };
};

export const fetchStatus =
  (userId: string | undefined) => async (dispatch: Dispatch<ProfileAction>) => {
    const response = await axios.get<string>(
      `https://social-network.samuraijs.com/api/1.0/profile/status/${userId}`
    );

    dispatch(setStatus(response.data));
  };

const setStatus = (status: string): ProfileAction => {
  return { type: ProfileActionTypes.SET_STATUS, payload: status };
};
