import { Form, Formik } from "formik";
import { FC } from "react";
import { IAuthFormValidation, IAuthFormValues } from "../../types/authTypes";
import Input from "../UI/Input";
import * as Yup from "yup";
import Button from "../UI/Button";
import TextError from "../UI/TextError";
import CaptchaForm from "./CaptchaForm";
import Loader from "../UI/Loader";

interface AuthFormProps {
  initialValues: IAuthFormValues;
  validationSchema: Yup.SchemaOf<IAuthFormValidation>;
  captcha: string;
  onSubmit: (values: IAuthFormValues) => void;
}

const AuthForm: FC<AuthFormProps> = ({
  initialValues,
  validationSchema,
  captcha,
  onSubmit,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ status, isSubmitting }) => {
        return (
          <Form className="flex flex-col justify-center pt-4 pb-3 px-6 text-white-500 dark-gradient sm:rounded sm:h-auto xs:rounded-none xs:h-screen">
            <div className="pb-9 text-center sm:text-2xl xs:text-xl">
              Authorization
            </div>

            <Input type="email" name="email" placeholder="Enter Email..." />

            <Input
              type="password"
              name="password"
              placeholder="Enter password..."
            />

            {status && status.message && (
              <TextError>{status.message}</TextError>
            )}

            {captcha && <CaptchaForm captcha={captcha} />}

            <Button
              className="mt-9 hover-dark-gradient disabled:bg-transparent w-full"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader /> : "Login"}
            </Button>

            <div className="text-center mt-6">
              <a
                className="text-xs hover:text-white-500/70 duration-200"
                href="https://social-network.samuraijs.com/signUp"
                target="_blank"
                rel="noreferrer"
              >
                If you would like to register
              </a>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AuthForm;
