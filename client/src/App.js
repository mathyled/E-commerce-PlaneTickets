import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from "./components/Users/Pages/Home/Home";
import{ ForgotPasswordPage }from './components/Users/Features/UserModal/pages/ForgotPasswordPage';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<ForgotPasswordPage />} />
      </Routes>
     
    </div>
  );
}

export default App;
