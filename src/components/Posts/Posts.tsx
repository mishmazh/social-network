import { FC } from "react";

const Posts: FC = () => {
  return (
    <div className="row-start-2 row-end-3 col-start-2 col-end-3 ">
      <div className="dark-gradient p-3 rounded text-white-500">
        <textarea
          className="text-black-500 w-full p-2 rounded text-sm resize-none h-14"
          placeholder="What's new?"
        />
        <div>Post 1</div>
        <div>Post 2</div>
      </div>
    </div>
  );
};

export default Posts;
