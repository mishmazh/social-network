import { FC, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthContainer from "./components/Auth/AuthContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";

const App: FC = () => {
  const { isAuth, login } = useTypedSelector((state) => state.auth);
  const { fetchAuthUserData } = useActions();

  useEffect(() => {
    fetchAuthUserData();
  }, []);

  let routes = (
    <Routes>
      <Route path="/" element={<AuthContainer />} />
      <Route path="/users" element={<Navigate to="/" />} />
      <Route path="/profile" element={<Navigate to="/" />} />
      <Route path="/profile/:userProfileId" element={<Navigate to="/" />} />
    </Routes>
  );

  if (isAuth) {
    routes = (
      <div className="h-full pb-4">
        <Header userLogin={login} />

        <div className="flex justify-center pt-3">
          <div className="flex w-full max-w-4xl">
            <Navbar />

            <Routes>
              <Route path="/" element={<Navigate to="/profile" />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route
                path="/profile/:userProfileId"
                element={<ProfileContainer />}
              />
              <Route path="/profile" element={<ProfileContainer />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }

  return <div className="h-screen">{routes}</div>;
};

export default App;
