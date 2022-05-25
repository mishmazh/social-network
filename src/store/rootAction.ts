import * as UsersActionCreators from "../store/actions/users";
import * as ProfileActionCreators from "../store/actions/profile";
import * as AuthActionCreators from "../store/actions/auth";
import * as AppActionCreators from "../store/actions/app";

export default {
  ...UsersActionCreators,
  ...ProfileActionCreators,
  ...AuthActionCreators,
  ...AppActionCreators,
};
