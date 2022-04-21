import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import { useEffect, useState } from "react";
import Home from "./components/Users/Features/Home";
import NotfoundPage from "./components/Users/Pages/NotfoundPage/NotfoundPage";
import { ForgotPasswordPage } from "./components/Users/Features/UserModal/pages/ForgotPasswordPage";
import Profilepage from "./components/Users/Features/UserModal/pages/Profilepage";
import ProtectedAdminRoute from "./ProtectedAdminRoute";
import { ResetPasswordPage } from "./components/Users/Features/UserModal/pages/ResetPasswordPage";
import LandingPage from "./components/Users/Features/Landing/LandingPage";
import CreateForm from "./components/Users/Pages/Create/CreateForm";
import Details from "./components/Users/Pages/Details/Details";
import CartPage from "./components/Users/Pages/CartPage/CartPage";
import ProtectAdminRoute from "./helpers/ProtectAdminRoutes";
import AdminLayout from "./components/Users/Pages/AdminPanel/components/src/layouts/Admin.js";
import Dashboard from "./components/Users/Pages/AdminPanel/components/src/views/Dashboard/Dashboard/index";

import Favorite from "./components/Users/Features/Favorite/Favorite";

import MyPlans from "./components/Users/Pages/MyPlans/MyPlans";

import Checkout from "./components/Users/Pages/Checkout/Checkout";
import DetailsAdmin from "./components/Users/Pages/AdminPanel/components/src/views/Dashboard/Dashboard/components/DetailsAdmin";
import {
  flightsTable,
  UserTable,
  OrdersTable,
} from "./components/Users/Pages/AdminPanel/components/src/views/Dashboard/Tables/index";
import Profile from "./components/Users/Pages/AdminPanel/components/src/views/Dashboard/Profile";
import SuccessBuy from "./components/Users/Pages/SuccessBuy";
import LoadingPage from "./components/Users/Features/Loading/LoadingPage";
// import Welcome from "./components/Users/Pages/Welcome/Welcome";
import Confirm from "./components/Users/Pages/SuccessConfirm";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProtectedUserRoute from "./ProtectedUserRoute";


function App() {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user);
  useEffect(() => {
    currentUser?.email &&
      window.localStorage.setItem("User", JSON.stringify(currentUser));

    //  if(currentUser?.email){
    //    const loggedUserJSON= window.localStorage.getItem("User") ;
    //    var user = JSON.parse(loggedUserJSON) }
    //    console.log(user)
    //  dispatch(dispatchUser(user))
  }, [currentUser]);
  const cUser = JSON.parse(localStorage.getItem("User"));
  //console.log("AAAA", cUser);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home user={cUser} />} />
        <Route exact path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route exact path="/detailspage:id" element={<Details  user={cUser} />}></Route>
        <Route exact path="/cart" element={<CartPage />} />

        <Route element={<ProtectedUserRoute user={cUser} />}>
          <Route exact path="/profile" element={<Profilepage />} />
          <Route exact path="/success" element={<SuccessBuy />} />
          <Route exact path="/favorite" element={<Favorite user={cUser} />} />
          <Route exact path="/recover/:token" element={<ResetPasswordPage />} />
          <Route exact path="/confirm:token" element={<Confirm />} />
        </Route>
    


        <Route element={<ProtectedAdminRoute user={cUser} />}>
          <Route
            exact
            path={"/admin/dashboard"}
            element={<AdminLayout user={cUser} currentLinkActive={Dashboard} />}
          />
          <Route
            exact
            path={"/admin/users"}
            element={<AdminLayout user={cUser} currentLinkActive={UserTable} />}
          />
          <Route
            exact
            path={"/admin/orders"}
            element={<AdminLayout user={cUser} currentLinkActive={OrdersTable} />}
          />
          <Route
            exact
            path={"/admin/flights"}
            element={<AdminLayout user={cUser} currentLinkActive={flightsTable} />}
          />
          <Route
            exact
            path={"/admin/profile"}
            element={<AdminLayout user={cUser} currentLinkActive={Profile} />}
          />
          <Route
            exact
            path={"/admin/orders/:id"}
            element={<AdminLayout user={cUser} currentLinkActive={DetailsAdmin} />}
          />
          <Route path="/admin/*" element={<Navigate to={"/admin/dashboard"} />} />
        </Route>

        <Route exact path="/confirm:token" element={<Confirm />} />
        <Route exact path="*" element={<NotfoundPage user={cUser} />} />
      </Routes>
    </div>
  );
}

export default App;
