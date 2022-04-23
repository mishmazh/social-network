import { FC } from "react";
import classes from "./Auth.module.scss";
import * as Yup from "yup";
import AuthForm from "./AuthForm/AuthForm";
import { IAuthFormValidation, IAuthFormValues } from "../../types/authTypes";
import { useActions } from "../../hooks/useActions";
import Modal from "../UI/Modal/Modal";

const Auth: FC = () => {
  const { loginAttempt } = useActions();

  const initialValues: IAuthFormValues = {
    email: "",
    password: "",
  };

  const validationSchema: Yup.SchemaOf<IAuthFormValidation> = Yup.object({
    email: Yup.string()
      .email("Неверный формат")
      .required("Поле обязательно для заполнения"),
    password: Yup.string().required("Поле обязательно для заполнения"),
  });

  const onSubmit = (values: IAuthFormValues) => {
    loginAttempt(values);
  };

  return (
    <div className={classes.Auth}>
      <AuthForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      />
      <Modal>
        <p>
          Для того, чтобы протестировать соц. сеть, используйте данные ниже:
        </p>
        <p>
          Email: <strong>free@samuraijs.com</strong>
        </p>
        <p>
          Password: <strong>free</strong>
        </p>
      </Modal>
    </div>
  );
};

export default Auth;
