import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Loader from "../UI/Loader/Loader";
import classes from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile: FC = () => {
  const { userId } = useParams();
  const { profileData, status, isLoading } = useTypedSelector(
    (state) => state.profilePage
  );
  const { fetchUserProfile } = useActions();

  useEffect(() => {
    fetchUserProfile(userId);
  }, []);

  return (
    <div className={classes.Profile}>
      {isLoading ? (
        <Loader />
      ) : (
        <ProfileInfo profileData={profileData} status={status} />
      )}
    </div>
  );
};

export default Profile;
