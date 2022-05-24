import { FC } from "react";
import Posts from "./Posts";
import * as Yup from "yup";
import { IPost, IPostsFormValidation } from "../../types/profilePageTypes";
import { useActions } from "../../hooks/useActions";
import { v4 as uuid } from "uuid";

const PostsContainer: FC = () => {
  const { addPost } = useActions();

  const initialValues: IPost = {
    id: uuid(),
    message: "",
  };

  const validationSchema: Yup.SchemaOf<IPostsFormValidation> = Yup.object({
    message: Yup.string().required("The field must not be empty"),
  });

  const onSubmit = (values: IPost) => {
    addPost(values);
  };

  return (
    <Posts
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    />
  );
};

export default PostsContainer;
