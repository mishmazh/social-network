import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import classes from "./Profile.module.scss";
import userAvatar from "../../assets/noUserAvatar.png";

const Profile: FC = () => {
  const { userId } = useParams();
  const { profileData } = useTypedSelector((state) => state.profilePage);
  const { fetchUserProfile } = useActions();

  useEffect(() => {
    fetchUserProfile(userId);
  }, []);

  return (
    <div className={classes.Profile}>
      <div className={classes.avatarBlock}>
        <img
          src={
            profileData.photos.large != null
              ? profileData.photos.large
              : userAvatar
          }
          alt="userAvatar"
        />
      </div>
      <div className={classes.descBlock}>
        <div className={classes.fullName}>{profileData.fullName}</div>
      </div>
    </div>
  );
};

export default Profile;
