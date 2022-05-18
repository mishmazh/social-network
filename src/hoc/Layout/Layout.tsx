import { FC, ReactNode } from "react";
import s from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className={s.layout}>{children}</div>;
};

export default Layout;
