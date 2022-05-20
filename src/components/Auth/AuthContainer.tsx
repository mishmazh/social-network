import { FC } from "react";
import * as Yup from "yup";
import AuthForm from "./AuthForm";
import {
  IAuthFormSubmit,
  IAuthFormValidation,
  IAuthFormValues,
} from "../../types/authTypes";
import { useActions } from "../../hooks/useActions";
import Modal from "../UI/Modal";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const AuthContainer: FC = () => {
  const { captcha } = useTypedSelector((state) => state.auth);
  const { loginAttempt } = useActions();

  const initialValues: IAuthFormValues = {
    email: "",
    password: "",
    captcha: "",
  };

  const validationSchema: Yup.SchemaOf<IAuthFormValidation> = Yup.object({
    email: Yup.string().email("Invalid format").required("Field is required"),
    password: Yup.string().required("Field is required"),
  });

  const onSubmit = (
    values: IAuthFormValues,
    { setStatus, setSubmitting }: IAuthFormSubmit
  ) => {
    loginAttempt(values, { setStatus, setSubmitting });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <AuthForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        captcha={captcha}
        onSubmit={onSubmit as () => void}
      />

      <Modal>
        <p>To test the social network, use the authorization data below:</p>
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
