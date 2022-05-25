import { FC } from "react";
import { IPost, IProfileData } from "../../types/profileTypes";
import userAvatar from "../../assets/noUserAvatar.png";

interface PostItemProps {
  post: IPost;
  profileData: IProfileData;
}

const PostItem: FC<PostItemProps> = ({ post, profileData }) => {
  return (
    <div className="flex items-center mt-2">
      <img
        className="w-14 rounded"
        src={
          profileData.photos && profileData.photos.small !== null
            ? profileData.photos.small
            : userAvatar
        }
        alt="post-img"
      />

      <div className="ml-2">
        <h1 className="text-lg">{profileData.fullName}</h1>
        <p className="text-sm opacity-70">{post.message}</p>
      </div>
    </div>
  );
};

export default PostItem;
