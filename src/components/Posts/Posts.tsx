import { FC } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import PostItem from "./PostItem";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { IPost, IPostsFormValidation } from "../../models/profileModels";
import TextArea from "../UI/TextArea";
import Button from "../UI/Button";
import { v4 as uuid } from "uuid";

interface PostsProps {
  initialValues: IPost;
  validationSchema: Yup.SchemaOf<IPostsFormValidation>;
  onSubmit: (values: IPost) => void;
}

const Posts: FC<PostsProps> = ({
  initialValues,
  validationSchema,
  onSubmit,
}) => {
  const { posts, profileData } = useTypedSelector((state) => state.profilePage);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => {
        return (
          <Form className="sm:row-start-2 sm:row-end-3 sm:col-start-2 sm:col-end-3 mb:row-start-3 mb:row-end-4">
            <div className="dark-gradient p-3 sm:rounded mb:rounded-none text-white-500">
              <TextArea type="text" name="message" placeholder="What's new?" />
              <Button className="w-1/4 mb-6 hover-dark-gradient" type="submit">
                Post
              </Button>

              {posts.map((post) => (
                <PostItem post={post} profileData={profileData} key={uuid()} />
              ))}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Posts;
