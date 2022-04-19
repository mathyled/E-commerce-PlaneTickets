import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Users/Features/Home";
import NotfoundPage from "./components/Users/Pages/NotfoundPage/NotfoundPage";
import { ForgotPasswordPage } from "./components/Users/Features/UserModal/pages/ForgotPasswordPage";
import Profilepage from "./components/Users/Features/UserModal/pages/Profilepage";
import ProtectedRoute from "./ProtectedRoutes";
import { ResetPasswordPage } from "./components/Users/Features/UserModal/pages/ResetPasswordPage";
import LandingPage from "./components/Users/Features/Landing/LandingPage";
import CreateForm from "./components/Users/Pages/Create/CreateForm";
import Details from "./components/Users/Pages/Details/Details";
import CartPage from "./components/Users/Pages/CartPage/CartPage";

import AdminLayout from "./components/Users/Pages/AdminPanel/components/src/layouts/Admin.js";
import Dashboard from "./components/Users/Pages/AdminPanel/components/src/views/Dashboard/Dashboard/index";


import Favorite from "./components/Users/Features/Favorite/Favorite";

import MyPlans from "./components/Users/Pages/MyPlans/MyPlans";

import Checkout from "./components/Users/Pages/Checkout/Checkout";

import {
  userTable,
  ordersTable,
} from "./components/Users/Pages/AdminPanel/components/src/views/Dashboard/Tables/index";
import Profile from "./components/Users/Pages/AdminPanel/components/src/views/Dashboard/Profile";
import SuccessBuy from "./components/Users/Pages/SuccessBuy";
import LoadingPage from "./components/Users/Features/Loading/LoadingPage";
// import Welcome from "./components/Users/Pages/Welcome/Welcome";
import Confirm from "./components/Users/Pages/SuccessConfirm";
import axios from "axios";

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const getUser = async () => {
  //    const response = await  axios.get("http://localhost:3001/api/auth/login/success",{withCredentials:true}).catch(
  //      console.log("not")
  //    );
  //     if(response && response.data){
  //       console.log("USER IS ", response.data)
  //     }
  //   }
  //   getUser();
  // },[]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home  />} />
        <Route path="/my-plans" element={<MyPlans />} />
        <Route path="/new-flight" element={<CreateForm />} />
        <Route exact path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route exact path="/detailspage:id" element={<Details />}></Route>

        <Route element={<ProtectedRoute />}>
          <Route exact path="/profile" element={<Profilepage />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route exact path="/success" element={<SuccessBuy />} />
        </Route>

        <Route exact path="/favorite" element={<Favorite />} />

        <Route exact path="/recover/:token" element={<ResetPasswordPage />} />
        <Route exact path="/cart" element={<CartPage />} />

        <Route path="/admin/" element={<AdminLayout />} />
        <Route
          exact
          path={"/admin/dashboard"}
          element={<AdminLayout currentLinkActive={Dashboard} />}
        />
        <Route
          exact
          path={"/admin/users"}
          element={<AdminLayout currentLinkActive={userTable} />}
        />
        <Route
          exact
          path={"/admin/orders"}
          element={<AdminLayout currentLinkActive={ordersTable} />}
        />
        <Route
          exact
          path={"/admin/profile"}
          element={<AdminLayout currentLinkActive={Profile} />}
        />

        <Route exact path="/confirm:token" element={<Confirm />} /> 

        <Route exact path="*" element={<NotfoundPage />} />

      </Routes>
    </div>
  );
}

export default App;
