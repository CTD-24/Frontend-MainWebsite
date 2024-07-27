import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <>
            <div className="navbar h-[15vh] w-[100%] bg--500 flex justify-center items-center fixed top-0 left-0 z-[3000]">
                <div className="nav-left h-full w-[20%] bg-red-40 flex justify-center items-center">
                    <span className="text-white text-[30px] font-extralight">CTD</span>
                </div>
                <div className="nav-mid h-full w-[60%] bg--400 flex justify-center items-center gap-[100px] text-[15px] text-white">
                    <Link to="/events">EVENTS</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/contact">CONTACT</Link>
                </div>
                <div className="nav-right h-full w-[20%] bg-green-40 flex justify-center items-center">
                    <Link to="/login" className="h-[5vh] w-[7vw] flex justify-center items-center bg-white rounded-full text-[#191919] text-[1.1vw] font-regular">LOGIN</Link>
                </div>
            </div>
        </>
     );
}
 
export default Navbar;