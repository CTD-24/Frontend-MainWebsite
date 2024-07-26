import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
    return ( 
        <>
            <div className="layout bg--500 min-h-[100vh] w-[100vw] flex flex-col justify-center items-center">
                    <Navbar/>
                    <Outlet/>
            </div>
        </>
     );
}
 
export default Layout;