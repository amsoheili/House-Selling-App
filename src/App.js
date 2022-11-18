import { Routes, BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUp";
import NotFoundPage from "./pages/NotFound";
import RegisterHousePage from "./pages/RegisterHouse";
import LoginPage from "./pages/LoginPage";
import classes from "./App.module.css";
function App() {
  return (
    <div className={classes.children}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="register-house" element={<RegisterHousePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
