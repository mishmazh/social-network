import { Form, Formik } from "formik";
import { FC } from "react";
import { IAuthFormValidation, IAuthFormValues } from "../../types/authTypes";
import Input from "../UI/Input";
import * as Yup from "yup";
import Button from "../UI/Button";

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
      {({ isSubmitting }) => {
        return (
          <Form className="flex flex-col bg-primary w-96 pt-4 pb-5 px-6 rounded text-white dark-gradient">
            <div className="pb-9 text-2xl text-center">Авторизация</div>

            <Input type="email" name="email" placeholder="Введите Email..." />

            <Input
              type="password"
              name="password"
              placeholder="Введите пароль..."
            />

            <Button
              className="mt-9 disabled:opacity-50"
              type="submit"
              disabled={isSubmitting}
            >
              Войти
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AuthForm;
