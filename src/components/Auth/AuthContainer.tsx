import { FC } from "react";
import * as Yup from "yup";
import AuthForm from "./AuthForm";
import { IAuthFormValidation, IAuthFormValues } from "../../types/authTypes";
import { useActions } from "../../hooks/useActions";
import Modal from "../UI/Modal";

const AuthContainer: FC = () => {
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
    <div className="flex justify-center items-center h-full">
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

export default AuthContainer;
