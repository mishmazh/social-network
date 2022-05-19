import { Form, Formik } from "formik";
import { FC } from "react";
import { IAuthFormValidation, IAuthFormValues } from "../../../types/authTypes";
import Input from "../../UI/Input/Input";
import * as Yup from "yup";
import Button from "../../UI/Button/Button";

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
      {() => {
        return (
          <Form className="flex flex-col w-96 bg-primary py-4 px-6 rounded text-white">
            <div className="pb-6 text-xl">Авторизация</div>

            <Input type="email" name="email" placeholder="Введите Email..." />

            <Input
              type="password"
              name="password"
              placeholder="Введите пароль..."
            />

            <Button classType="login" type="submit">
              Войти
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AuthForm;
