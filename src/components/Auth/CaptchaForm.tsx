import Input from "../UI/Input";
import { FC } from "react";

interface CaptchaFormProps {
  captcha: string;
}

const CaptchaForm: FC<CaptchaFormProps> = ({ captcha }) => (
  <div className="mt-5">
    <img className="rounded w-1/2" src={captcha} alt="captcha-img" />
    <Input
      type="text"
      name="captcha"
      placeholder="Enter the symbols on the picture..."
    />
  </div>
);

export default CaptchaForm;
