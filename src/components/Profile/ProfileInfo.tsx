import { ChangeEvent, FC } from "react";
import { IProfileData } from "../../types/profilePageTypes";
import noUserAvatar from "../../assets/noUserAvatar.png";
import ProfileStatus from "./ProfileStatus";
import Delimiter from "../UI/Delimiter";

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
    <div className="w-full">
      <div className="flex text-white ">
        <div className="w-1/2 h-full mr-5 dark-gradient p-4 rounded">
          <img
            className="w-full rounded"
            src={profileAvatar !== null ? profileAvatar : noUserAvatar}
            alt="profileAvatar"
          />
          {isOwner && (
            <>
              <input
                className="hidden"
                type="file"
                id="inputFile"
                onChange={onChangeAvatar}
              />
              <div>
                <label
                  className="upload-avatar-button hover-dark-gradient"
                  htmlFor="inputFile"
                >
                  Upload avatar
                </label>
              </div>
            </>
          )}
        </div>

        <div className="dark-gradient text-sm w-full p-4 rounded">
          <div className="text-xl">{profileData.fullName}</div>

          <ProfileStatus
            profileStatus={profileStatus}
            updateStatus={updateStatus}
            isOwner={isOwner}
          />

          <div className="pt-11">
            <p className="text-base">Main information</p>
            <Delimiter />

            <ul className="pt-5 pb-9 text-sm">
              <li>
                About me:{" "}
                <span className="opacity-70">{profileData.aboutMe}</span>
              </li>
              <li>
                Looking for a job?{" "}
                {profileData.lookingForAJob ? (
                  <span className="opacity-70">Yes</span>
                ) : (
                  <span className="opacity-70">No</span>
                )}
              </li>
              <li>
                About job:{" "}
                <span className="opacity-70">
                  {profileData.lookingForAJobDescription}
                </span>
              </li>
            </ul>

            <p className="text-base">Contacts:</p>
            <Delimiter />
            <p className="opacity-70 mt-2">in developing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
