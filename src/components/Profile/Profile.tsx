import { ChangeEvent, FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Loader from "../UI/Loader";
import ProfileInfo from "./ProfileInfo";
import ProfileAvatar from "./ProfileAvatar";
import PostsContainer from "../Posts/PostsContainer";

const Profile: FC = () => {
  let { userProfileId } = useParams();
  const navigate = useNavigate();
  const { profileData, profileStatus, isProfileLoading } = useTypedSelector(
    (state) => state.profilePage
  );
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

  const onChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      updateAvatar(e.target.files[0]);
    }
  };

  return (
    <div className="sm:grid lg:grid-cols-[250px_450px] md:grid-rows-[0fr_1fr] row-start-2 row-end-3 col-start-3 col-end-4 profile-adapt gap-3 mb-3">
      {isProfileLoading ? (
        <Loader className="loader-center" />
      ) : (
        <>
          <ProfileAvatar
            profileData={profileData}
            isOwner={!userProfileId}
            onChangeAvatar={onChangeAvatar}
          />
          <ProfileInfo
            profileData={profileData}
            profileStatus={profileStatus}
            updateAvatar={updateAvatar}
            updateStatus={updateStatus}
            isOwner={!userProfileId}
          />
          <PostsContainer />
        </>
      )}
    </div>
  );
};

export default Profile;
