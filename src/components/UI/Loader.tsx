import { FC } from "react";

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = ({ className }) => {
  const cls = ["loader", className];

  return <div className={cls.join(" ")} />;
};

export default Loader;
