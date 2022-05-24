import {
  IProfileData,
  ProfileAction,
  ProfileActionTypes,
  ProfileState,
} from "../../types/profilePageTypes";

const initialState: ProfileState = {
  posts: [
    { id: 1, message: "Hello!" },
    { id: 2, message: "Do you like this app?" },
    { id: 3, message: "What do you think about capybara?" },
  ],
  profileData: {} as IProfileData,
  profileStatus: "",
  isProfileLoading: false,
};

const profileReducer = (
  state = initialState,
  action: ProfileAction
): ProfileState => {
  switch (action.type) {
    case ProfileActionTypes.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case ProfileActionTypes.SET_PROFILE:
      return { ...state, profileData: action.payload };
    case ProfileActionTypes.SET_STATUS:
      return { ...state, profileStatus: action.payload };
    case ProfileActionTypes.SET_LOADING:
      return { ...state, isProfileLoading: action.payload };
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
