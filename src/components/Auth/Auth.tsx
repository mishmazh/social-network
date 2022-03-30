import { FC } from "react";
import classes from "./Auth.module.scss";
import * as Yup from "yup";
import AuthForm from "./AuthForm/AuthForm";
import { IAuthFormValidation, IAuthFormValues } from "../../types/authTypes";
import { useActions } from "../../hooks/useActions";

const Auth: FC = () => {
  const { authAttempt } = useActions();

  const initialValues: IAuthFormValues = {
    email: "",
    password: "",
    // rememberMe: false,
  };

  const validationSchema: Yup.SchemaOf<IAuthFormValidation> = Yup.object({
    email: Yup.string()
      .email("Неверный формат")
      .required("Поле обязательно для заполнения"),
    password: Yup.string().required("Поле обязательно для заполнения"),
  });

  const onSubmit = (values: IAuthFormValues) => {
    authAttempt(values);
  };

  return (
    <div className={classes.Auth}>
      <AuthForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Auth;
