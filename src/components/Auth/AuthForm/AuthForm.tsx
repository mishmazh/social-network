import { Form, Formik } from "formik";
import { FC } from "react";
import classes from "./AuthForm.module.scss";
import { IAuthFormValidation, IAuthFormValues } from "../../../types/authTypes";
import Input from "../../UI/Input/Input";
import Loader from "../../UI/Loader/Loader";
import * as Yup from "yup";

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
          <Form className={classes.Form}>
            <div className={classes.title}>Авторизация</div>

            <Input type="email" name="email" placeholder="Введите Email..." />

            <Input
              type="password"
              name="password"
              placeholder="Введите пароль..."
            />

            {/* <div className={classes.rememberMe}>
              <Checkbox label="Запомнить" name="rememberMe" />
            </div> */}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Загрузка..." : "Войти"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AuthForm;
