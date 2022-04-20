import {
  IProfileData,
  ProfileAction,
  ProfileActionTypes,
  ProfileState,
} from "../../types/profilePageTypes";

const initialState: ProfileState = {
  profileData: {} as IProfileData,
  profileStatus: "",
  profileAvatar: null,
  isLoading: false,
};

const profileReducer = (
  state = initialState,
  action: ProfileAction
): ProfileState => {
  switch (action.type) {
    case ProfileActionTypes.SET_PROFILE:
      return { ...state, profileData: action.payload };
    case ProfileActionTypes.SET_STATUS:
      return { ...state, profileStatus: action.payload };
    case ProfileActionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case ProfileActionTypes.SET_AVATAR:
      return { ...state, profileAvatar: action.payload };
    case ProfileActionTypes.UPDATE_AVATAR:
      return {
        ...state,
        profileData: { ...state.profileData, photos: action.payload },
      };
    default:
      return state;
  }
};

export default profileReducer;
