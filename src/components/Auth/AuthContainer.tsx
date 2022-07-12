import { FC } from "react";
import * as Yup from "yup";
import AuthForm from "./AuthForm";
import {
  IAuthFormSubmit,
  IAuthFormValidation,
  IAuthFormValues,
} from "../../models/authModels";
import { useActions } from "../../hooks/useActions";
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
    <div className="row-start-2 row-end-3 col-start-3 col-end-4">
      <AuthForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        captcha={captcha}
        onSubmit={onSubmit as () => void}
      />
    </div>
  );
};

export default AuthContainer;
