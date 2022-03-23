import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import useTypedSelector from "../../hooks/useTypedSelector";
import { fetchUsers } from "../../store/actions/users";
import classes from "./Users.module.scss";

const Users: FC = () => {
  const { users } = useTypedSelector((state) => state.usersPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className={classes.Users}>
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Users;
