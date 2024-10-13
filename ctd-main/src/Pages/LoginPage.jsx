import React, { useState } from "react";
import loginBG from "../assets/LoginBG.png";
import MainGradient from "../assets/MainBG.png";
import { useNavigate } from "react-router-dom";
import { onLogin } from "../api/auth";
import { authenticateUser } from "../redux/slices/authSlice";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const getToken = () => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; jwt=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};


function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState({
    message: "",
    severity: "",
    visible: false,
  });

  const [isLogin, setIsLogin] = useState(false);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    let loadingToast = toast.loading("Logging In...");
    try {
      const response = await onLogin({
        username: username,
        password: password,
      });
      // console.log("API Response:", response);
      // setAlert({
      //   message: "Login successful!",
      //   severity: "success",
      //   visible: true,
      // });
      setIsLogin(true);
      const token = getToken();
      // console.log("JWT Token:", token);
      dispatch(authenticateUser());
      toast.dismiss(loadingToast);
      toast.success(response.data.message);
      // console.log("reslgn" , response);
      navigate("/");
      setError(false);
    } 
    
    catch (error) {
      // setError(true);
      // console.log("Error logging in: ", error);
      toast.dismiss(loadingToast);
      toast.error(error?.response?.data?.message || "Error During Login");
      // if (error.response && error.response.status === 403) {
      //   toast.error("Wrong credentials! Please try again.");
      // } 
      
      // else {
      //   toast.error("Error during Login");
      // }
    }
  };

  const toSignup = () => {
    navigate("/signup");
  };
  return (
    <>
      <div className="alert-main h-auto w-auto absolute top-[3%] z-[20000]">
        {/* {alert.visible && (
          <Alert severity={alert.severity}>
            <AlertTitle>
              {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
            </AlertTitle>
            {alert.message}
          </Alert>
        )} */}
      </div>
      <div className="flex justify-center items-center loginContainer h-[100vh] w-[100vw] pt-[8vh] md:pt-[10vh] bg-[#00000090] ">
        {/* <img
          className="h-[100%] w-[100%] absolute top-0 left-0 z-[1] object-cover"
          src={MainGradient}
          alt=""
        /> */}

        <div className="absolute z-[2] flex flex-col justify-center items-center h-[70vh]  w-[400px] max-sm:w-[90%]  bg--500  backdrop-blur-[20px] border-[#005a6add] border-[1px] rounded-xl text-white uppercase tracking-normal">
          <h1 className="text-[50px] max-md:text-[8vh]">LOGIN</h1>
          <div className="bg--700 flex flex-col justify-evenly items-center h-[35%] w-full">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="USERNAME"
              className="inputPlaceholders w-[80%] max-md:w-[90%] h-[6vh] max-md:h-[7vh] px-[1.5vw] rounded-lg bg-white bg-opacity-[0.2] text-white placeholder:text-gray-300 max-md:px-[4vw] focus:outline-none focus:ring-2 focus:ring-white  mt-2 text-[15px] max-md:text-[2vh]"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="PASSWORD"
              className="inputPlaceholders w-[80%] max-md:w-[90%] h-[6vh] max-md:h-[7vh] max-md:px-[4vw] px-[1.5vw] rounded-lg bg-white bg-opacity-[0.2] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white  mt-2 text-[15px] max-md:text-[2vh]"
            />
          </div>

          <div className="w-[80%] max-md:w-[90%] flex justify-between items-start bg--400 h-10">
            <Link
              to="/forgotpassword"
              className="cursor-pointer text-[0.9vw] max-md:text-[1.5vh]"
            >
              Forgot Password?
            </Link>
            <h3
              onClick={toSignup}
              className="cursor-pointer  text-[0.9vw] max-md:text-[1.5vh]"
            >
              No Account?
            </h3>
          </div>
          <div className="mt-4 mb-8 w-full flex items-center justify-center">
            <button
              onClick={handleSubmit}
              className="loginButton bg-white hover:bg-slate-400 text-black text-uppercase flex justify-center items-center w-[80%] h-[6vh] border-none rounded-[0.6vw] cursor-pointer font-semibold  text-[3.5vw] md:text-[1vw]"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
