import {
  UsersAction,
  UsersActionTypes,
  UsersState,
} from "../../types/usersTypes";

const initialState: UsersState = {
  users: [],
  totalUsersCount: 0,
  error: "",
  isLoading: true,
};

const usersReducer = (
  state = initialState,
  action: UsersAction
): UsersState => {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS:
      return { ...state, users: action.payload };
    case UsersActionTypes.FETCH_USERS_SUCCESS:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default usersReducer;
