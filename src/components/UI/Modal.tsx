import { FC, ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  return <div className="absolute bottom-3 opacity-80 text-xs">{children}</div>;
};

export default Modal;
