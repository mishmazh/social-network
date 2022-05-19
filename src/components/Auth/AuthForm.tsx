import { Form, Formik } from "formik";
import { FC } from "react";
import { IAuthFormValidation, IAuthFormValues } from "../../types/authTypes";
import Input from "../UI/Input";
import * as Yup from "yup";
import Button from "../UI/Button";
import TextError from "../UI/TextError";

interface AuthFormProps {
  initialValues: IAuthFormValues;
  validationSchema: Yup.SchemaOf<IAuthFormValidation>;
  onSubmit: (values: IAuthFormValues) => void;
}

const AuthForm: FC<AuthFormProps> = ({
  initialValues,
  validationSchema,
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
          <Form className="flex flex-col bg-primary w-96 pt-4 pb-5 px-6 rounded text-white dark-gradient">
            <div className="pb-9 text-2xl text-center">Authorization</div>

            <Input type="email" name="email" placeholder="Enter Email..." />

            <Input
              type="password"
              name="password"
              placeholder="Enter password..."
            />

            {status && status.message && (
              <TextError>{status.message}</TextError>
            )}

            <Button
              className="mt-9 disabled:opacity-50"
              type="submit"
              disabled={isSubmitting}
            >
              Login
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AuthForm;
