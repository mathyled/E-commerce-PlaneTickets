import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from "./components/Users/Pages/Home/Home";
import{NotfoundPage} from "./components/Users/Pages/NotfoundPage/NotfoundPage"
import {ForgotPasswordPage} from "./components/Users/Features/UserModal/pages/ForgotPasswordPage"
import Profilepage from "./components/Users/Features/UserModal/pages/Profilepage";
import ProtectedRoute from "./ProtectedRoutes"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path='/forgot-password' element={<ForgotPasswordPage />} />

        <Route element={<ProtectedRoute />}> 
        <Route exact path='/profile' element={<Profilepage />} />
        </Route>

        <Route exact path='*' element={<NotfoundPage />} />
      </Routes>

    </div>
  );
}





export default App;
