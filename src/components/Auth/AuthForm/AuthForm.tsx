import { Form, Formik } from "formik";
import { FC } from "react";
import classes from "./AuthForm.module.scss";
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
          <Form className={classes.Form}>
            <div className={classes.title}>Авторизация</div>

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
