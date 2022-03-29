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

export interface ProfileState {
  profileData: IProfileData;
  status: string;
  isLoading: boolean;
}

export enum ProfileActionTypes {
  SET_USER_PROFILE = "SET_USER_PROFILE",
  SET_STATUS = "SET_STATUS",
  SET_LOADING = "SET_LOADING",
}

interface SetUserProfileAction {
  type: ProfileActionTypes.SET_USER_PROFILE;
  payload: IProfileData;
}

interface SetStatusAction {
  type: ProfileActionTypes.SET_STATUS;
  payload: string;
}

interface SetLoadingAction {
  type: ProfileActionTypes.SET_LOADING;
}

export type ProfileAction =
  | SetUserProfileAction
  | SetStatusAction
  | SetLoadingAction;
