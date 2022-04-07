import { FC } from "react";
import classes from "./Layout.module.scss";

const Layout: FC = ({ children }) => {
  return <div className={classes.Layout}>{children}</div>;
};

export default Layout;
