import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Users/Features/Home";
import { NotfoundPage } from "./components/Users/Pages/NotfoundPage/NotfoundPage";
import { ForgotPasswordPage } from "./components/Users/Features/UserModal/pages/ForgotPasswordPage";
import Profilepage from "./components/Users/Features/UserModal/pages/Profilepage";
import ProtectedRoute from "./ProtectedRoutes";
import { ResetPasswordPage } from "./components/Users/Features/UserModal/pages/ResetPasswordPage";
import LandingPage from "./components/Users/Features/Landing/LandingPage";
import CreateForm from "./components/Users/Pages/Create/CreateForm";
import Details from "./components/Users/Pages/Details/Details";
import CartPage from "./components/Users/Pages/CartPage/CartPage";
import Demo from "./components/Users/Features/Autocomplete";
import Favorite from "./components/Users/Features/Favorite/Favorite";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/new-flight" element={<CreateForm />} />
        <Route path="/home" element={<Home />} />
        <Route exact path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route exact path="/detailspage:id" element={<Details />}></Route>

        <Route element={<ProtectedRoute />}>
          <Route exact path="/profile" element={<Profilepage />} />
        </Route>

        <Route exact path="/reset-password" element={<ResetPasswordPage />} />

        <Route exact path="*" element={<NotfoundPage />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/demo" element={<Demo />} />
        <Route exact path="/favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
