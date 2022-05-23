import { FC } from "react";
import { IProfileData, IContacts } from "../../types/profilePageTypes";
import ProfileStatus from "./ProfileStatus";
import Delimiter from "../UI/Delimiter";
import ProfileContact from "./ProfileContact";

interface ProfileInfoProps {
  profileData: IProfileData;
  profileStatus: string;
  isOwner: boolean;
  updateAvatar: (avatarFile: File) => void;
  updateStatus: (status: string) => void;
}

const ProfileInfo: FC<ProfileInfoProps> = ({
  profileData,
  profileStatus,
  isOwner,
  updateStatus,
}) => {
  const {
    fullName,
    aboutMe,
    lookingForAJobDescription,
    lookingForAJob,
    contacts,
  } = profileData;

  return (
    <div className="w-full">
      <div className=" dark-gradient text-white-500 p-3 rounded">
        <div className="text-xl">{fullName}</div>

        <ProfileStatus
          profileStatus={profileStatus}
          updateStatus={updateStatus}
          isOwner={isOwner}
        />

        <div className="pt-11">
          <p className="text-base">Main information</p>
          <Delimiter />

          <ul className="mt-5 mb-9 text-sm">
            <li>
              About me: <span className="opacity-70 ml-1">{aboutMe}</span>
            </li>
            <li>
              Looking for a job?
              {lookingForAJob ? (
                <span className="opacity-70 ml-1">Yes</span>
              ) : (
                <span className="opacity-70 ml-1">No</span>
              )}
            </li>
            <li>
              About job:
              <span className="opacity-70 ml-1">
                {lookingForAJobDescription}
              </span>
            </li>
          </ul>

          <p className="text-base">Contacts:</p>
          <Delimiter />

          <div className="mt-2 text-sm">
            {contacts &&
              Object.keys(contacts).map((contact, index) => {
                return (
                  <ProfileContact
                    key={index}
                    contactName={contact}
                    contactValue={contacts[contact as keyof IContacts]}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
