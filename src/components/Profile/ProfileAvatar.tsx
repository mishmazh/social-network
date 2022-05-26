import { ChangeEvent, FC } from "react";
import { IProfileData } from "../../types/profileTypes";
import noUserAvatar from "../../assets/noUserAvatar.png";

interface ProfileAvatarProps {
  profileData: IProfileData;
  isOwner: boolean;
  onChangeAvatar: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ProfileAvatar: FC<ProfileAvatarProps> = ({
  profileData,
  isOwner,
  onChangeAvatar,
}) => {
  const { photos } = profileData;

  return (
    <div className="sm:row-start-1 sm:row-end-2 sm:col-start-1 sm:col-end-2">
      <div className="dark-gradient p-3 sm:rounded mb:rounded-none">
        {photos && (
          <img
            className="w-full rounded"
            src={photos.large !== null ? photos.large : noUserAvatar}
            alt="profileAvatar"
          />
        )}

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
                className="upload-avatar-btn hover-dark-gradient"
                htmlFor="inputFile"
              >
                Upload avatar
              </label>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileAvatar;
