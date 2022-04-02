import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Users/Pages/Home/Home";
import { NotfoundPage } from "./components/Users/Pages/NotfoundPage/NotfoundPage";
import { ForgotPasswordPage } from "./components/Users/Features/UserModal/pages/ForgotPasswordPage";
import Profilepage from "./components/Users/Features/UserModal/pages/Profilepage";
import ProtectedRoute from "./ProtectedRoutes";
import { ResetPasswordPage } from "./components/Users/Features/UserModal/pages/ResetPasswordPage";
import LandingPage from "./components/Users/Features/Landing/LandingPage";
import Details from "./components/Users/Pages/Details/Details";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route exact path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route exact path="/detailspage" element={<Details />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route exact path="/profile" element={<Profilepage />} />
        </Route>

        <Route exact path="/reset-password" element={<ResetPasswordPage />} />

        <Route exact path="*" element={<NotfoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
