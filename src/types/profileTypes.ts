export interface IPhotos {
  small?: string;
  large?: string;
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
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: IContacts;
  photos: IPhotos;
}

export interface ProfileState {
  profileData: IProfileData;
  // status: string;
}

export enum ProfileActionTypes {
  SET_USER_PROFILE = "SET_USER_PROFILE",
  // SET_STATUS = "SET_STATUS",
}

interface SetUserProfileAction {
  type: ProfileActionTypes.SET_USER_PROFILE;
  payload: IProfileData;
}

// interface SetStatusAction {
//   type: ProfileActionTypes.SET_STATUS;
//   payload: string;
// }

export type ProfileAction = SetUserProfileAction;
// | SetStatusAction;
