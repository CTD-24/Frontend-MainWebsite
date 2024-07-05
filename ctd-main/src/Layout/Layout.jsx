import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
    return ( 
        <>
            <div className="layout bg--500 h-screen w-full flex flex-col justify-center items-center">
                <div className="nav h-[15%] w-full flex justify-center items-center">
                    <Navbar/>
                </div>
                <div className="nav h-[85%] w-full flex justify-center items-center">
                    <Outlet/>
                </div>
            </div>
        </>
     );
}
 
export default Layout;