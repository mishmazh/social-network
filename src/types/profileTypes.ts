export interface IPhotos {
  small: string | null;
  large: string | null;
}

export interface IContacts {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
}

export interface IProfileData {
  userId: number;
  aboutMe: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: IContacts;
  photos: IPhotos;
}

export interface IProfileStatusData {
  resultCode: number;
  messages: string[];
  data: {};
}

export interface ProfileState {
  profileData: IProfileData;
  profileStatus: string;
  isLoading: boolean;
}

export enum ProfileActionTypes {
  SET_PROFILE = "SET_PROFILE",
  SET_STATUS = "SET_STATUS",
  SET_LOADING = "SET_LOADING",
}

interface SetProfileAction {
  type: ProfileActionTypes.SET_PROFILE;
  payload: IProfileData;
}

interface SetStatusAction {
  type: ProfileActionTypes.SET_STATUS;
  payload: string;
}

interface SetLoadingAction {
  type: ProfileActionTypes.SET_LOADING;
  payload: boolean;
}

export type ProfileAction =
  | SetProfileAction
  | SetStatusAction
  | SetLoadingAction;
