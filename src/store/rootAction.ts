import * as UsersActionCreators from "../store/actions/users";
import * as ProfileActionCreators from "../store/actions/profile";

export default {
  ...UsersActionCreators,
  ...ProfileActionCreators,
};
