import { FC } from "react";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App: FC = () => {
  return (
    <div className={classes.Layout}>
      <Header />

      <div className={classes.container}>
        <div>
          <Navbar />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default App;
