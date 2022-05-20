import { FC, ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <div className="absolute bottom-3 xl:text-sm text-white-500 dark-gradient w-80 p-2 rounded">
      {children}
    </div>
  );
};

export default Modal;
