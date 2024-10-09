import { Link } from "react-router-dom";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Added useDispatch import
import axios from "axios";
import { onLogout } from "../api/auth";
import { unauthenticateUser } from "../redux/slices/authSlice";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  gsap.registerPlugin(ScrollTrigger);

  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch(); // Added useDispatch hook

  const cart = useSelector((state) => state.cart);
  console.log("CART: ", cart.items.length);

  const navigate = useNavigate();

  const toPage = (link) => {
    navigate(link)
  }

  const resLinks = [
    {
      id: 1,
      name: "HOME",
      link: "/",
    },
    {
      id: 2,
      name: "EVENTS",
      link: "/events",
    },

    {
      id: 3,
      name: "OUR TEAM",
      link: "/team",
    },
    {
      id: 4,
      name: "CONTACT US",
      link: "/contact",
    },

    {
      id: 4,
      name: "YOUR CART",
      link: "/cart",
    },

    {
      id: 5,
      name: "LOGIN",
      link: "/login",
    },
  ];

  useEffect(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "0% 0%",
        end: "20% 10%",
        scrub: true,
      },
    });

    t1.to(
      ".navbar",
      {
        height: "10vh",
        backdropFilter: "blur(10px)",
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

  const [menuClick, setMenuClick] = useState(false);

  if (menuClick) {
    let t1 = gsap.timeline();
    t1.to(
      ".resNav",
      {
        right: "0%",
        ease: "power1.inOut",
        duration: 0.4,
        delay: 0.2,
      },
      "one"
    )
    .from(".res-links h2", {
      y: "10vh",
      stagger: 0.2,
      duration: 0.6,
      ease: "power1.inOut",
    });
  } else {
    const isMobile = window.innerWidth <= 640;

    gsap.to(".menuBtn", {
      ease: "power1.inOut",
      duration: 0.8,
    });

    gsap.to(".resNav", {
      right: isMobile ? "-100%" : "-50%",
      ease: "power1.inOut",
      duration: 0.4,
      delay: 0.2,
    });
  }
  useEffect(() => {
    const menuBtn = document.querySelector(".menuBtn");

    menuBtn.addEventListener("mouseenter", () => {
      gsap.to(".menuBtn", {
        ease: "power1.inOut",
      });
    });

    menuBtn.addEventListener("mouseleave", () => {
      gsap.to(".menuBtn", {
        border: "",
        ease: "power1.inOut",
      });
    });
  }, []);


  const toCart = () => {
    navigate("/cart");
  };

  const handleLogout = async () => {
    try {

      dispatch(unauthenticateUser()); // Dispatch the unauthentication action after successful logout
      console.log("Logged out Successfully...");
      navigate("/login");

      await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/logout`, {}, { withCredentials: true });



      
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="navbar md:h-[15vh] w-[100%] bg-transparent flex md:justify-center items-center fixed top-0 left-0 z-[7000] max-md:justify-between max-md:h-[13vh] ">
        <div className="nav-left h-full w-[20%] flex justify-center items-center max-sm:w-[30%]">
          <Link
            to="/"
            className="homeLogo text-white text-[2vw] max-sm:text-[3vh] font-extralight"
          >
            CTD
          </Link>
        </div>
        <div className="nav-mid  h-full w-[60%] flex justify-center items-center gap-[100px] text-white max-md:hidden text-[1vw]">
          <Link to="/events">EVENTS</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/team">TEAM</Link>
          <Link to="/contact">CONTACT</Link>
          {isLogin && <Link to="/dashboard">DASHBOARD</Link>}
        </div>
        <div className="nav-right h-full w-[20%] flex justify-evenly items-center">
          <Badge badgeContent={cart.items.length} color="primary">
            <FiShoppingCart
              onClick={toCart}
              size={22}
              color="white"
              className="max-md:hidden md:block cursor-pointer"
            />
          </Badge>

          <button
            onClick={() => {
              setMenuClick(!menuClick);
            }}
            className="menuBtn z-[7000]"
          >
            {!menuClick ? (
              <HiMenuAlt3
                onClick={() => {
                  setMenuClick(!menuClick);
                }}
                size={30}
                color="white"
                className="max-md:block md:hidden "
              />
            ) : (
              <IoCloseOutline size={30} color="white" />
            )}
          </button>

          {isLogin ? (
            <Link
              onClick={handleLogout}
              className="max-lg:hidden h-[5vh] w-[7vw] flex justify-center items-center bg-white rounded-full text-[#191919] text-[1.1vw] font-regular"
            >
              LOGOUT
            </Link>
          ) : (
            <Link
              to="/login"
              className="max-lg:hidden h-[5vh] w-[7vw] flex justify-center items-center bg-white rounded-full text-[#191919] text-[1.1vw] font-regular"
            >
              LOGIN
            </Link>
          )}
        </div>
      </div>

      <div className="resNav z-[5000] fixed top-0 right-[-50%] h-[100%] w-[50%] max-md:w-[100%] max-md:right-[-100%] bg-[#212121d2] backdrop-blur-[30px] flex flex-col justify-center items-center ">
        <div className="res-links h-[80%] w-full px-[3vw] bg--500 flex flex-col justify-center items-center">
          {resLinks.map((item) => {
            return (
              <button
                key={item.id}
                onClick={() => {
                  toPage(item.link);
                  setMenuClick(!menuClick);
                }}
                className="linkBox hover:bg-white hover:text-black hover:rounded-[1vh] overflow-hidden max-md:h-[10vh] h-[20vh] w-full bg--700 flex justify-end items-end border-b-[#585858] border-solid border-b-[1px] text-white"
              >
                <h2 className="text-[2.2vw] max-md:text-[5vh]">{item.name}</h2>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
