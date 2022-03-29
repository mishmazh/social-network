import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import classes from "./Profile.module.scss";
import Loader from "../UI/Loader/Loader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile: FC = () => {
  const { userId } = useParams();
  const { profileData, status, isLoading } = useTypedSelector(
    (state) => state.profilePage
  );
  const { fetchUserProfile, fetchStatus } = useActions();

  useEffect(() => {
    fetchUserProfile(userId);
    fetchStatus(userId);
  }, []);

  return <ProfileInfo profileData={profileData} status={status} />;
};

export default Profile;
