import {
  IProfileData,
  ProfileAction,
  ProfileActionTypes,
  ProfileState,
} from "../../types/profileTypes";

const initialState: ProfileState = {
  profileData: {} as IProfileData,
  profileStatus: "",
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
    default:
      return state;
  }
};

export default profileReducer;
