import {
  IProfileData,
  ProfileAction,
  ProfileActionTypes,
  ProfileState,
} from "../../types/profileTypes";

const initialState: ProfileState = {
  profileData: <IProfileData>{},
  // status: "",
};

const profileReducer = (
  state = initialState,
  action: ProfileAction
): ProfileState => {
  switch (action.type) {
    case ProfileActionTypes.SET_USER_PROFILE:
      return { ...state, profileData: action.payload };
    // case ProfileActionTypes.SET_STATUS:
    //   return { ...state, status: action.payload };
    default:
      return state;
  }
};

export default profileReducer;
