import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import LandingPage from '../src/Pages/LandingPage.jsx';
import LoginPage from '../src/Pages/LoginPage.jsx';
// import EventsPage from '../src/Pages/EventsPage.jsx';
import AboutPage from '../src/Pages/AboutPage.jsx';
import ContactPage from '../src/Pages/ContactPage.jsx';





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* <Route index element={<MainPage/>} /> */}
      <Route index element={<LandingPage/>}/>
      {/* <Route path='/events' element={<EventsPage/>} /> */}
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/contact' element={<ContactPage/>} />
      <Route path='/login' element={<LoginPage/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
