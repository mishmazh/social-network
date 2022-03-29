import * as UsersActionCreators from "../store/actions/users";
import * as ProfileActionCreators from "../store/actions/profile";
import * as AuthActionCreators from "../store/actions/auth";

export default {
  ...UsersActionCreators,
  ...ProfileActionCreators,
  ...AuthActionCreators,
};
