import { useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import axios from "axios";
import MainGradient from "../assets/MainBG.png";
import CircularProgress from "@mui/material/CircularProgress"; 

const ForgotPassword = () => {
  const [userData, setUserData] = useState({
    email: "",
    otp: "",
    newPassword: "",
  });

  const [alert, setAlert] = useState({
    message: "",
    severity: "",
    visible: false,
  });

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const addChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/forgot_password",
        {
          email: userData.email,
        }
      );
      setAlert({
        message: response.data.message,
        severity: "success",
        visible: true,
      });
      setStep(2);
    } catch (error) {
      setAlert({
        message: error.response.data.message,
        severity: "error",
        visible: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/reset_password",
        {
          email: userData.email,
          otp: userData.otp,
          newPassword: userData.newPassword,
        }
      );
      setAlert({
        message: response.data.message,
        severity: "success",
        visible: true,
      });
    } catch (error) {
      setAlert({
        message: error.response.data.message,
        severity: "error",
        visible: true,
      });
    }
  };

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
      <div className="flex justify-center items-center loginContainer h-[100vh] w-[100vw] pt-[8vh]">
        <img
          className="h-[100%] w-[100%] absolute top-0 left-0 z-[1] object-cover"
          src={MainGradient}
          alt=""
        />

        <div className="absolute z-[2] flex flex-col justify-center items-center h-[70vh] w-[90%] md:w-[50vw] bg-white bg-opacity-[0.15] shadow-lg backdrop-blur-[8.5px] rounded-xl text-white uppercase tracking-[0.4vw] p-4">
          <div className="max-w-xs sm:max-w-md lg:max-w-lg">
            <h1 style={{ fontSize: "2.5rem" }} className="mb-4">
              FORGOT PASSWORD
            </h1>
          </div>
          <form
            onSubmit={
              step === 1 ? handleSubmitEmail : handleSubmitResetPassword
            }
            className="flex flex-col gap-4 p-4 w-full"
          >
            <input
              type="text"
              name="email"
              value={userData.email}
              onChange={addChange}
              placeholder="EMAIL"
              className="w-full h-10 px-2 rounded-lg bg-white bg-opacity-[0.2] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white tracking-normal"
              required
            />
            {step === 2 && (
              <>
                <input
                  type="text"
                  name="otp"
                  value={userData.otp}
                  onChange={addChange}
                  placeholder="OTP"
                  className="w-full h-10 px-2 rounded-lg bg-white bg-opacity-[0.2] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white tracking-normal"
                  required
                />
                <input
                  type="password"
                  name="newPassword"
                  value={userData.newPassword}
                  onChange={addChange}
                  placeholder="NEW PASSWORD"
                  className="w-full h-10 px-2 rounded-lg bg-white bg-opacity-[0.2] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white tracking-normal"
                  required
                />
              </>
            )}
            <div className="flex justify-center">
              <button
                type="submit"
                className="loginButton bg-white hover:bg-slate-400 text-black text-uppercase flex justify-center items-center w-full h-10 border-none rounded-[0.6vw] cursor-pointer font-semibold tracking-normal text-base sm:text-lg md:text-xl"
                disabled={loading}
              >
                {loading && <CircularProgress size={20} className="mr-2" />}{" "}
                {step === 1 ? "SEND OTP" : "RESET PASSWORD"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
