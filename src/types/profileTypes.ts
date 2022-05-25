// ---------- Formik ---------- //
export interface IPostsFormValues {
  message: string;
}

export interface IPostsFormValidation {
  message: string;
}

// ---------- Profile ---------- //
export interface IPost {
  id: number | string;
  message: string;
}

export interface IPhotos {
  small: string | null;
  large: string | null;
}

export interface IContacts {
  github: string | null;
  vk: string | null;
  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  website: string | null;
  youtube: string | null;
  mainLink: string | null;
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

export interface IProfileAvatarData {
  resultCode: number;
  messages: string[];
  data: {
    photos: IPhotos;
  };
}

export interface ProfileState {
  posts: IPost[];
  profileData: IProfileData;
  profileStatus: string;
  isProfileLoading: boolean;
}

export enum ProfileActionTypes {
  ADD_POST = "profile/ADD_POST",
  SET_PROFILE = "profile/SET_PROFILE",
  SET_STATUS = "profile/SET_STATUS",
  SET_LOADING = "profile/SET_LOADING",
  UPDATE_AVATAR = "profile/UPDATE_AVATAR",
}

interface AddPostAction {
  type: ProfileActionTypes.ADD_POST;
  payload: IPost;
}

interface SetProfileAction {
  type: ProfileActionTypes.SET_PROFILE;
  payload: IProfileData;
}

interface SetStatusAction {
  type: ProfileActionTypes.SET_STATUS;
  payload: string;
}

interface UpdateAvatarAction {
  type: ProfileActionTypes.UPDATE_AVATAR;
  payload: IPhotos;
}

interface SetLoadingAction {
  type: ProfileActionTypes.SET_LOADING;
  payload: boolean;
}

export type ProfileAction =
  | AddPostAction
  | SetProfileAction
  | SetStatusAction
  | UpdateAvatarAction
  | SetLoadingAction;
