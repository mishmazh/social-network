import { ChangeEvent, FC, useState } from "react";
import classes from "./ProfileStatus.module.scss";

interface ProfileStatusProps {
  profileStatus: string;
  updateStatus: (status: string) => void;
}

const ProfileStatus: FC<ProfileStatusProps> = ({
  profileStatus,
  updateStatus,
}) => {
  const [status, setStatus] = useState<string>(profileStatus);
  const [isEditMode, setEditMode] = useState<boolean>(false);

  const editModeOn = () => {
    setEditMode(true);
  };

  const editModeOff = () => {
    updateStatus(status);
    setEditMode(false);
  };

  const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  return (
    <div className={classes.ProfileStatus}>
      {isEditMode ? (
        <div>
          <input
            type="text"
            onChange={onChangeStatus}
            value={status}
            autoFocus={true}
          />
          <button onClick={editModeOff}>Сохранить</button>
        </div>
      ) : (
        <div onClick={editModeOn}>{status}</div>
      )}
    </div>
  );
};

export default ProfileStatus;
