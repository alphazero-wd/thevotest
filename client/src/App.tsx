import { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { useAppSelector } from "./features/hooks";
import { Home, Login, NotFound, Signup } from "./pages";

const App: FC = () => {
  const { access_token } = useAppSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={!access_token ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!access_token ? <Signup /> : <Navigate to="/" />}
        />
        <Route path="/post/:id" />
        <Route path="/group/:id" />
        <Route path="/user/profile" />
        <Route path="/user/settings" />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
