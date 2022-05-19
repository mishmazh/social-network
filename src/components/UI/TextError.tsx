import { FC, ReactNode } from "react";

interface TextErrorProps {
  children: ReactNode;
}

const TextError: FC<TextErrorProps> = ({ children }) => (
  <div className="text-red text-xs p-1">{children}</div>
);

export default TextError;
