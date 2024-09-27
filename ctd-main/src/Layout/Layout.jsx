import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
// import UserContextProvider from "../context/UserContextProvider";

const Layout = () => {
  return (
      <div className="layout bg-[#181818] min-h-[100vh] w-[100vw] flex flex-col justify-center items-center overflow-x-hidden">
        <Navbar />
          <Outlet />
      </div>
  );
};

export default Layout;
