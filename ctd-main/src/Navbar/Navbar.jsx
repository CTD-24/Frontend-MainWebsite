import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <>
            <div className="navbar h-full w-[100%] bg--500 flex justify-center items-center">
                <div className="nav-left h-full w-[14%] bg-red-40 flex justify-center items-center">
                    <h1 className="text-white text-[30px] font-bold">CTD</h1>
                </div>
                <div className="nav-mid h-full w-[72%] bg-blue-40 flex justify-center items-center gap-[100px] text-[15px] text-white">
                    <Link to="/events">EVENTS</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/contact">CONTACT</Link>
                </div>
                <div className="nav-right h-full w-[14%] bg-green-40 flex justify-center items-center">
                    <Link to="/login" className="h-[45%] w-[60%] flex justify-center items-center bg-[#3385FF] rounded-full text-[#191919] text-[15px] font-bold">LOGIN</Link>
                </div>
            </div>
        </>
     );
}
 
export default Navbar;