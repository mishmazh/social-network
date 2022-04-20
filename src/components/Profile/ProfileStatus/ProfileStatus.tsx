import { ChangeEvent, FC, useState } from "react";
import classes from "./ProfileStatus.module.scss";

interface ProfileStatusProps {
  profileStatus: string;
  isOwner: boolean;
  updateStatus: (status: string) => void;
}

const ProfileStatus: FC<ProfileStatusProps> = ({
  profileStatus,
  isOwner,
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

  const changeEditMode = isEditMode ? (
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
    <div className={classes.status} onClick={editModeOn}>
      {status}
    </div>
  );

  return (
    <div className={classes.ProfileStatus}>
      {isOwner ? changeEditMode : status}
    </div>
  );
};

export default ProfileStatus;
