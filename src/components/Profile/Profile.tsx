import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Loader from "../UI/Loader/Loader";
import classes from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile: FC = () => {
  const { userProfileId } = useParams();
  const { profileData, profileStatus, isLoading } = useTypedSelector(
    (state) => state.profilePage
  );
  const { fetchProfile, updateStatus } = useActions();

  useEffect(() => {
    fetchProfile(userProfileId);
  }, []);

  return (
    <div className={classes.Profile}>
      {isLoading ? (
        <Loader />
      ) : (
        <ProfileInfo
          profileData={profileData}
          profileStatus={profileStatus}
          updateStatus={updateStatus}
        />
      )}
    </div>
  );
};

export default Profile;
