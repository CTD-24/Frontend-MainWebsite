import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import wavebg from "../assets/wavebg.mp4";

// import UserContextProvider from "../context/UserContextProvider";

const Layout = () => {
  return (
    <>
    <video className="futureVideo h-[100vh] absolute top-0 w-[100%] object-cover  z-[1] opacity-[100%] " src={wavebg} autoPlay muted loop></video>

      <div className="layout bg-transparent absolute min-h-[100vh] w-[100vw] flex flex-col justify-center z-[100] items-center overflow-x-hidden">

        <Navbar />
          <Outlet />
      </div>
      </>
  );
};

export default Layout;
