import { FC } from "react";
import classes from "./Loader.module.scss";

const Loader: FC = () => {
  return (
    <div className={classes.Center}>
      <div className={classes.Loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
