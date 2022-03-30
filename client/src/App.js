import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Users/Pages/Home/Home";
import{NotfoundPage} from "./components/Users/Pages/NotfoundPage/NotfoundPage"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path='*' element={<NotfoundPage />} />
      </Routes>

    </div>
  );
}

export default App;
