import { IUser, UsersAction, UsersActionTypes } from "../../models/usersModels";
import { updateObjectInArray } from "../../helpers/objectHelpers";

interface UsersState {
  users: IUser[];
  totalUsersCount: number;
  currentPage: number;
  pageSize: number;
  isPageLoading: boolean;
  isFollowLoading: number[];
}

const initialState: UsersState = {
  users: [],
  totalUsersCount: 0,
  currentPage: 1,
  pageSize: 10,
  isPageLoading: false,
  isFollowLoading: [],
};

const usersReducer = (
  state = initialState,
  action: UsersAction
): UsersState => {
  switch (action.type) {
    case UsersActionTypes.SET_PAGE_LOADING:
      return { ...state, isPageLoading: action.payload };
    case UsersActionTypes.SET_USERS:
      return { ...state, users: action.payload };
    case UsersActionTypes.SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.payload };
    case UsersActionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case UsersActionTypes.FOLLOW_USER:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload, "id", {
          followed: true,
        }),
      };
    case UsersActionTypes.UNFOLLOW_USER:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload, "id", {
          followed: false,
        }),
      };
    case UsersActionTypes.SET_FOLLOW_LOADING:
      return {
        ...state,
        isFollowLoading: action.isLoading
          ? [...state.isFollowLoading, action.userId]
          : state.isFollowLoading.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export default usersReducer;
