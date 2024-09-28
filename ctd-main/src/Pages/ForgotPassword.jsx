
import { useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import axios from "axios";
import MainGradient from "../assets/MainBG.png";


const ForgotPassword = () => {

    const [userData, setUserData] = useState({
        email:"",
        otp:"",
        newPassword:""
    });

    const [alert, setAlert] = useState({
        message: "",
        severity: "",
        visible: false,
      });
    

    const addChange = ((e) => {
        const {name,value} = e.target;
        setUserData(() => {
            return{
                ...userData,
                [name]:value
            }
        })
    })

  return (
    <>
      <div className="alert-main h-auto w-auto absolute top-[3%] z-[20000]">
        {alert.visible && (
          <Alert severity={alert.severity}>
            <AlertTitle>
              {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
            </AlertTitle>
            {alert.message}
          </Alert>
        )}
      </div>
      <div className="flex justify-center items-center loginContainer h-[100vh] w-[100vw] pt-[8vh] ">
        <img
          className="h-[100%] w-[100%] absolute top-0 left-0 z-[1] object-cover"
          src={MainGradient}
          alt=""
        />

        <div className="absolute z-[2] flex flex-col justify-center items-center h-[70vh] w-[50vw] bg-white bg-opacity-[0.15] shadow-lg backdrop-blur-[8.5px] rounded-xl text-white uppercase tracking-[0.4vw]">
          <h1 className=" text-[4vw]">FORGOT PASSWORD</h1>
          <div className=" bg--700 flex flex-col justify-evenly items-center  h-[35%] w-full">
            <input
              type="text"
              value={userData.email}
              onChange={addChange}
              placeholder="EMAIL"
              className="inputPlaceholders w-[80%] h-[6vh] max-md-[1920px]:h-[5vh] px-[2vw] rounded-lg bg-white bg-opacity-[0.2] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white tracking-normal mt-2 text-[0.9vw]"
            />
            <input
              type="text"
              value={userData.otp}
              onChange={addChange}
              placeholder="OTP"
              className="inputPlaceholders w-[80%] h-[6vh] max-md-[1920px]:h-[5vh] px-[2vw] rounded-lg bg-white bg-opacity-[0.2] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white tracking-normal mt-2 text-[0.9vw]"
            />
            <input
              type="text"
              value={userData.newPassword}
              onChange={addChange}
              placeholder="NEW PASSWORD"
              className="inputPlaceholders w-[80%] h-[6vh] max-md-[1920px]:h-[5vh] px-[2vw] rounded-lg bg-white bg-opacity-[0.2] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white tracking-normal mt-2 text-[0.9vw]"
            />
          </div>
          <div className="w-[80%] flex justify-between items-start bg--400  h-10">
            
          </div>
          <div className="mt-0 mb-8 w-full flex items-center justify-center">
            <button
              onClick={async (e) => {
                await handleSubmit(e); // Pass the event object (e)
                dispatch(authenticateUser()); // Dispatch authentication action after successful login
              }}
              className="loginButton bg-white hover:bg-slate-400 text-black text-uppercase flex justify-center items-center w-[80%] h-[6vh] border-none rounded-[0.6vw] cursor-pointer font-semibold tracking-normal text-[1vw]"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
