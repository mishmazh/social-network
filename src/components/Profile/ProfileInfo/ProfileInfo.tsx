import { ChangeEvent, FC } from "react";
import { IProfileData } from "../../../types/profilePageTypes";
import classes from "./ProfileInfo.module.scss";
import noUserAvatar from "../../../assets/noUserAvatar.png";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

interface ProfileInfoProps {
  profileData: IProfileData;
  profileStatus: string;
  profileAvatar: string | null;
  isOwner: boolean;
  updateAvatar: (avatarFile: File) => void;
  updateStatus: (status: string) => void;
}

const ProfileInfo: FC<ProfileInfoProps> = ({
  profileData,
  profileStatus,
  profileAvatar,
  isOwner,
  updateAvatar,
  updateStatus,
}) => {
  const onChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      updateAvatar(e.target.files[0]);
    }
  };

  return (
    <div className={classes.ProfileInfo}>
      <div className={classes.avatarBlock}>
        <img
          src={profileAvatar !== null ? profileAvatar : noUserAvatar}
          alt="profileAvatar"
        />
        {isOwner && <input type="file" onChange={onChangeAvatar} />}
      </div>

      <div className={classes.descBlock}>
        <div className={classes.fullName}>{profileData.fullName}</div>
        <ProfileStatus
          profileStatus={profileStatus}
          updateStatus={updateStatus}
          isOwner={isOwner}
        />

        <div className={classes.mainInfo}>
          <p>Основная информация</p>
          <hr />
          <ul>
            <li>Обо мне: {profileData.aboutMe}</li>
            <li>
              В поисках работы? {profileData.lookingForAJob ? "Да" : "Нет"}
            </li>
            <li>Про работу: {profileData.lookingForAJobDescription}</li>
          </ul>

          <p>Контакты:</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
