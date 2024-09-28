import { Link } from "react-router-dom";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Added useDispatch import
import axios from "axios";
import { onLogout } from "../api/auth";
import { unauthenticateUser } from "../redux/slices/authSlice";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const Navbar = () => {
  gsap.registerPlugin(ScrollTrigger);

  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch(); // Added useDispatch hook

  useEffect(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "20% 20%",
        end: "100% 20%",
        scrub: true,
      },
    });

    t1.to(
      ".navbar",
      {
        height: "10vh",
        backdropFilter: "blur(4px)",
        ease: "expo.inOut",
        duration: 2,
        delay: 0.5,
      },
      "nav"
    );
    t1.to(
      ".nav-mid",
      {
        fontSize: "0.8vw",
        ease: "expo.inOut",
        duration: 0.9,
        delay: 0.5,
      },
      "nav"
    );
    gsap.from(
      ".nav-mid a",
      {
        y: "-10vh",
        stagger: 0.2,
        ease: "power1.inOut",
        duration: 0.9,
      },
      "nav"
    );
  }, []);

  const navigate = useNavigate();

  const toCart = () => {
    navigate("/cart");
  };

  const handleLogout = async () => {
    try {
      await onLogout();
      dispatch(unauthenticateUser()); // Dispatch the unauthentication action after successful logout
      console.log("Logged out Successfully...");
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="navbar md:h-[15vh] w-[100%] bg-transparent flex md:justify-center items-center fixed top-0 left-0 z-[3000] max-sm:justify-between max-sm:h-[13vh]">
        <div className="nav-left h-full w-[20%] flex justify-center items-center max-sm:w-[30%]">
          <Link
            to="/"
            className="homeLogo text-white text-[2vw] max-sm:text-[3vh] font-extralight"
          >
            CTD
          </Link>
        </div>
        <div className="nav-mid h-full w-[60%] flex justify-center items-center gap-[100px] text-white max-sm:hidden text-[1vw]">
          <Link to="/events">EVENTS</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/team">TEAM</Link>
          <Link to="/contact">CONTACT</Link>
          {isLogin && <Link to="/dashboard">DASHBOARD</Link>}
        </div>
        <div className="nav-right h-full w-[20%] flex justify-evenly items-center">
          <Badge badgeContent={4} color="primary" >
          <FiShoppingCart onClick={toCart} size={22} color="white" className="max-sm:hidden md:block cursor-pointer" />

          </Badge>
          <HiMenuAlt3 size={30} className="max-sm:block md:hidden fill-white" />
          {isLogin ? (
            <Link
              to="/"
              onClick={handleLogout}
              className="max-sm:hidden h-[5vh] w-[7vw] flex justify-center items-center bg-white rounded-full text-[#191919] text-[1.1vw] font-regular"
            >
              LOGOUT
            </Link>
          ) : (
            <Link
              to="/login"
              className="max-sm:hidden h-[5vh] w-[7vw] flex justify-center items-center bg-white rounded-full text-[#191919] text-[1.1vw] font-regular"
            >
              LOGIN
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
