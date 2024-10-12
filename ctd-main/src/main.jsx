import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import PaymentPage from "./Pages/PaymentPage.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../src/redux/store.js";
import ForgotPassword from "./Pages/ForgotPassword.jsx";
import EventDetail from "./Pages/EventDetail.jsx";
import { useSelector } from "react-redux";



const PrivateRoute = () => {
  const isAuth = useSelector((state) => state.auth.isAuth); // get isAuthenticated from Redux store
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

// RestrictedRoute Component
const RestrictedRoute = () => {
  const isAuth = useSelector((state) => state.auth.isAuth); // get isAuthenticated from Redux store
  return !isAuth ? <Outlet /> : <Navigate to="/dashboard" />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      {/* <Route index element={<MainPage/>} /> */}
      <Route index element={<LandingPage />} />
      {/* <Route path='/events' element={<EventsPage/>} /> */}
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/team' element={<TeamPage/>} />
      <Route path='/contact' element={<ContactPage/>} />
      {/* <Route path='/cart' element={<CartPage/>} /> */}
      <Route path='/events' element={<EventsPage />} />
      <Route path='/registerform' element={<RegisterForm />} />
      <Route path='/forgotpassword' element={<ForgotPassword/>} />
      <Route path='/eventDesc/:eventName' element={<EventDetail/>} />

      <Route element={<PrivateRoute/>}>
        <Route path='/dashboard' element={<DashboardPage/>} />
        <Route path='/pay' element={<PaymentPage/>} />
      <Route path='/cart' element={<CartPage/>} />


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
  <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition: Flip
/>
  </PersistGate>
  </Provider>
);
