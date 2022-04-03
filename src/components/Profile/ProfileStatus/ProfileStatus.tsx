import { ChangeEvent, FC, useState } from "react";

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

  const setEditModeHandler = () => {
    setEditMode(true);
  };

  const changeProfileStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  console.log(status);
  return (
    <div onClick={setEditModeHandler}>
      {isEditMode ? (
        <div>
          <input
            type="text"
            onChange={changeProfileStatus}
            value={status}
            // onBlur={() => setEditMode(false)}
            autoFocus={true}
          />
          <button onClick={() => updateStatus(status)}>Сохранить</button>
        </div>
      ) : (
        profileStatus
      )}
    </div>
  );
};

export default ProfileStatus;
