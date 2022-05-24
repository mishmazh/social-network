import { FC, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import AuthContainer from "./components/Auth/AuthContainer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";
import Users from "./components/Users/Users";

const App: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  const { fetchAuthUserData, logoutAttempt } = useActions();
  const navigate = useNavigate();

  const logoutHandler = () => {
    logoutAttempt();
    navigate("/");
  };

  useEffect(() => {
    fetchAuthUserData();
  }, []);

  let routes = (
    <Routes>
      <Route path="/" element={<AuthContainer />} />
      <Route path="/users" element={<Users />} />
      <Route path="/followers" element={<Navigate to="/" />} />
      <Route path="/profile" element={<Navigate to="/" />} />
      <Route path="/profile/:userProfileId" element={<Profile />} />
    </Routes>
  );

  if (isAuth) {
    routes = (
      <Routes>
        <Route path="/" element={<Navigate to="/profile" />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile/:userProfileId" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    );
  }

  return (
    <div className="layout">
      <div className="grid grid-rows-[45px_1fr] grid-cols-[2fr_140px_3fr_2fr] gap-3 h-screen">
        <Header />

        <Navbar isAuth={isAuth} logoutHandler={logoutHandler} />
        {routes}
      </div>
    </div>
  );
};

export default App;
