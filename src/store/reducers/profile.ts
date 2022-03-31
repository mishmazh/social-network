import {
  IProfileData,
  ProfileAction,
  ProfileActionTypes,
  ProfileState,
} from "../../types/profileTypes";

const initialState: ProfileState = {
  profileData: {} as IProfileData,
  status: "",
  isLoading: false,
};

const profileReducer = (
  state = initialState,
  action: ProfileAction
): ProfileState => {
  switch (action.type) {
    case ProfileActionTypes.SET_USER_PROFILE:
      return { ...state, profileData: action.payload };
    case ProfileActionTypes.SET_STATUS:
      return { ...state, status: action.payload, isLoading: false };
    case ProfileActionTypes.SET_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default profileReducer;
