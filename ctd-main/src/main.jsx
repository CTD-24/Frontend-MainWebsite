import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Navigate
} from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import LandingPage from "../src/Pages/LandingPage.jsx";
import LoginPage from "../src/Pages/LoginPage.jsx";
// import EventsPage from '../src/Pages/EventsPage.jsx';
import AboutPage from '../src/Pages/AboutPage.jsx';
import ContactPage from '../src/Pages/ContactPage.jsx';
import TeamPage from './Pages/TeamPage.jsx';
import SignupPage from "./Pages/SignupPage.jsx";
import DashboardPage from "./Pages/DashboardPage.jsx";
import CartPage from "./Pages/CartPage.jsx";
import EventsPage from "./Pages/EventsPage.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../src/redux/store.js";
import ForgotPassword from "./Pages/ForgotPassword.jsx";



const PrivateRoute = () => {

  const isAuth = false;
  return (isAuth ? <Outlet/> : <Navigate to="/login"/>)
}

const RestrictedRoute = () => {

  const isAuth = false;
  return (!isAuth ? <Outlet/> : <Navigate to="/dashboard"/>)
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      {/* <Route index element={<MainPage/>} /> */}
      <Route index element={<LandingPage />} />
      {/* <Route path='/events' element={<EventsPage/>} /> */}
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/team' element={<TeamPage/>} />
      <Route path='/contact' element={<ContactPage/>} />
      <Route path='/cart' element={<CartPage/>} />
      <Route path='/events' element={<EventsPage />} />
      <Route path='/registerform' element={<RegisterForm />} />
      <Route path='/forgotpassword' element={<ForgotPassword/>} />



      

      <Route element={<PrivateRoute/>}>
        <Route path='/dashboard' element={<DashboardPage/>} />


      </Route>
      <Route element={<RestrictedRoute/>}>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage/>} />
      </Route>
 

    </Route>
 
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
  <RouterProvider router={router} />
  </PersistGate>
  </Provider>
);
