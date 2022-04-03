import {
  UsersAction,
  UsersActionTypes,
  UsersState,
} from "../../types/usersTypes";

const initialState: UsersState = {
  users: [],
  totalUsersCount: 0,
  currentPage: 1,
  pageSize: 10,
  isLoading: false,
};

const usersReducer = (
  state = initialState,
  action: UsersAction
): UsersState => {
  switch (action.type) {
    case UsersActionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case UsersActionTypes.SET_USERS:
      return { ...state, users: action.payload };
    case UsersActionTypes.SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.payload };
    case UsersActionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
