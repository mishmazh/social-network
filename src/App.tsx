import { FC, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import classes from "./App.module.scss";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Users from "./components/Users/Users";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";
import Layout from "./hoc/Layout/Layout";

const App: FC = () => {
  const { isAuth, userId, login } = useTypedSelector((state) => state.auth);
  const { fetchAuthUserData } = useActions();

  useEffect(() => {
    fetchAuthUserData();
  }, []);

  let routes = (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/users" element={<Navigate to="/" />} />
      <Route path="/profile" element={<Navigate to="/" />} />
      <Route path="/profile/:userProfileId" element={<Navigate to="/" />} />
    </Routes>
  );

  if (isAuth) {
    routes = (
      <div className={classes.App}>
        <Header userLogin={login} />

        <div className={classes.container}>
          <div>
            <Navbar />

            <Routes>
              <Route path="/" element={<Navigate to="/profile" />} />
              <Route path="/users" element={<Users />} />
              <Route path="/profile/:userProfileId" element={<Profile />} />
              <Route
                path="/profile"
                // element={<Navigate to={`/profile/${userId}`} />}
                element={<Profile />}
              />
            </Routes>
          </div>
        </div>
      </div>
    );
  }

  return <Layout>{routes}</Layout>;
};

export default App;
