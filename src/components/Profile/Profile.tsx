import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import classes from "./Profile.module.scss";
import userAvatar from "../../assets/noUserAvatar.png";

const Profile: FC = () => {
  const { userId } = useParams();
  const { profileData, status } = useTypedSelector(
    (state) => state.profilePage
  );
  const { fetchUserProfile, fetchStatus } = useActions();

  useEffect(() => {
    fetchUserProfile(userId);
    fetchStatus(userId);
  }, []);

  return (
    <div className={classes.Profile}>
      <div className={classes.avatarBlock}>
        {/*<img*/}
        {/*  src={*/}
        {/*    profileData.photos.large != null*/}
        {/*      ? profileData.photos.large*/}
        {/*      : userAvatar*/}
        {/*  }*/}
        {/*  alt="userAvatar"*/}
        {/*/>*/}
      </div>
      <div className={classes.descBlock}>
        <div className={classes.fullName}>{profileData.fullName}</div>
        {status}
      </div>
    </div>
  );
};

export default Profile;
