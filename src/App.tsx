import { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Users from "./components/Users/Users";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";

const App: FC = () => {
  const { login, isAuth } = useTypedSelector((state) => state.auth);
  const { fetchAuthUserData } = useActions();

  useEffect(() => {
    fetchAuthUserData();
  }, []);

  return (
    <div className={classes.Layout}>
      <Header userLogin={login} isAuth={isAuth} />

      <div className={classes.container}>
        <div>
          <Navbar />

          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/profile/:userId" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
