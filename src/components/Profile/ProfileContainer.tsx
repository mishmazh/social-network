import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Loader from "../UI/Loader";
import ProfileInfo from "./ProfileInfo";

const ProfileContainer: FC = () => {
  let { userProfileId } = useParams();
  const navigate = useNavigate();
  const { profileData, profileStatus, profileAvatar, isLoading } =
    useTypedSelector((state) => state.profilePage);
  const { userId } = useTypedSelector((state) => state.auth);
  const { fetchProfile, updateStatus, updateAvatar } = useActions();

  useEffect(() => {
    if (!userProfileId && userId !== null) {
      userProfileId = userId.toString();

      if (!userProfileId) {
        navigate("/");
      }
    }

    fetchProfile(userProfileId);
  }, [userProfileId]);

  return (
    <div className="w-full h-screen">
      {isLoading ? (
        <Loader />
      ) : (
        <ProfileInfo
          profileData={profileData}
          profileStatus={profileStatus}
          profileAvatar={profileAvatar}
          updateAvatar={updateAvatar}
          updateStatus={updateStatus}
          isOwner={!userProfileId}
        />
      )}
    </div>
  );
};

export default ProfileContainer;
