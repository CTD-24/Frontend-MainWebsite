import { Link } from "react-router-dom";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiMenuAlt3 } from "react-icons/hi";


const Navbar = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "10% 00%",
                end: "100% 100%",
                scrub: true,
                markers: false
            }
        });

        t1.to(".navbar", {
            backdropFilter: "blur(10px)"
        });

    },[])
    return ( 
        <>
            <div className="navbar md:h-[15vh] w-[100%] bg-transparent flex md:justify-center items-center fixed top-0 left-0 z-[3000] max-sm:justify-between max-sm:h-[13vh] ">
                <div className="nav-left h-full w-[20%] bg-red-40 flex justify-center items-center max-sm:w-[30%] ">
                    <Link to="/" className="homeLogo text-white text-[30px] font-extralight">CTD</Link>
                </div>
                <div className="nav-mid h-full w-[60%] bg--400 flex justify-center items-center gap-[100px] text-[15px] text-white max-sm:hidden">
                    <Link to="/events">EVENTS</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/team">TEAM</Link>
                    <Link to="/contact">CONTACT</Link>
                </div>
                <div className="nav-right h-full w-[20%] bg-green-40 flex justify-center items-center">
                    <HiMenuAlt3 size={30} className="max-sm:block md:hidden fill-white bg--300" />
                    <Link to="/login" className=" max-sm:hidden h-[5vh] w-[7vw] flex justify-center items-center bg-white rounded-full text-[#191919] text-[1.1vw] font-regular">LOGIN</Link>
                </div>
            </div>
        </>
     );
}
 
export default Navbar;