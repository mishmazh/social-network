import { FC } from "react";
import { IProfileData } from "../../../types/profileTypes";
import classes from "./ProfileInfo.module.scss";
import userAvatar from "../../../assets/noUserAvatar.png";

interface ProfileInfoProps {
  profileData: IProfileData;
  status: string;
}

const ProfileInfo: FC<ProfileInfoProps> = ({ profileData, status }) => {
  return (
    <div className={classes.ProfileInfo}>
      <div className={classes.avatarBlock}>
        {/* <img
              src={
                profileData.photos.large != null
                  ? profileData.photos.large
                  : userAvatar
              }
              alt="userAvatar"
            /> */}
      </div>
      <div className={classes.descBlock}>
        <div className={classes.fullName}>{profileData.fullName}</div>
        {status}

        <div className={classes.mainInfo}>
          <p>Основная информация</p>
          <hr />
          <ul>
            <li>Обо мне: </li>
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
