import { ChangeEvent, FC, useState } from "react";
import Button from "../UI/Button";

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
    setEditMode(false);
    updateStatus(status);
  };

  const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  const changeEditMode = isEditMode ? (
    <div>
      <input
        className="w-full text-xs py-2 pl-2 my-2 rounded text-black-500"
        type="text"
        onChange={onChangeStatus}
        value={status}
        autoFocus={true}
      />
      <Button className="text-xs px-3 py-1.5" onClick={editModeOff}>
        Save
      </Button>
    </div>
  ) : (
    <div
      className="rounded py-1 pl-1 cursor-pointer text-xs hover-dark-gradient"
      onClick={editModeOn}
    >
      {status}
    </div>
  );

  return <div className="text-xs">{isOwner ? changeEditMode : status}</div>;
};

export default ProfileStatus;
