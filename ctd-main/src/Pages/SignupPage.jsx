import React, { useState } from "react";
import MainGradient from "../assets/MainBG.png";
import { useNavigate } from "react-router-dom";
import { onRegistration } from "../api/auth";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import axios from 'axios'
import { toast } from "react-toastify";

function SignupPage() {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate("/login");
  };

  const [values, setValues] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    enrollment_number: "",
    is_junior: true,
    password: "",
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [alert, setAlert] = useState({
    message: "",
    severity: "",
    visible: false,
  });

  const handleRadioChange = (e) => {
    setValues({ ...values, is_junior: e.target.value === "junior" });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form submitted with values:", values);

    try {
      const registrationData = {
        username: values.username,
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        phone_number: values.phone_number,
        enrollment_number: values.enrollment_number,
        is_junior: values.is_junior === 'junior',
        password: values.password,
      };

      // console.log('reg',registrationData)
      let loadingToast = toast.loading("Registering...");
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/register`,registrationData,{
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      // console.log("Registration successful:", response.data);
      // setAlert({
      //   message: "Registration successful!",
      //   severity: "success",
      //   visible: true,
      // });
        // setAlert({
        //   message: "",
        //   severity: "",
        //   visible: false,
        // });
      toast.dismiss(loadingToast);
      toast.success(response.data.message);
      navigate("/login"); 
    } catch (err) {

      
      toast.dismiss(loadingToast);
        // setAlert({
        //   message: err.response.data.message,
        //   severity: "error",
        //   visible: true,
        // });
      // } 

      // console.error("Registration error:", err);
      setError(err.response?.data?.message || "Registration failed");
      toast.error(err.response?.data?.message || "Registration failed");
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
    <div className="flex bg-[#0000008f] max-md:min-h-[100vh] justify-center items-center loginContainer h-[100vh] w-[100vw] pt-[8vh]">
      {/* <img
        className="h-[100%] w-[100%] absolute top-0 left-0 z-[1] object-cover"
        src={MainGradient}
        alt="Background"
      /> */}

      <form
        onSubmit={onSubmit}
        className="absolute  backdrop-blur-[20px] border-[#0ddbffdd] border-[1px] z-[2] max-md:top-[15%] flex flex-col justify-center items-center max-md:h-[100vh] h-[70vh] max-lg:w-[95vw] w-[1100px] bg-transparent shadow-lg  rounded-xl text-white uppercase "
      >
        <h1 className="text-[60px] max-md:text-[8vh] h-[20%] w-full flex justify-center items-center max-md:h-[10%] bg--700">
          SIGNUP
        </h1>
        <div className="signupForm h-[80%] max-md:h-[90%] w-full max-md:flex-col flex justify-center items-center">
          <div className="w-[100%] h-[100%] bg--600 max-md:h-[50%] flex flex-col justify-center items-center max-md:justify-around">
            <div className="flex flex-col justify-center items-center max-md:gap-0 max-md:py-0 gap-6 h-[100%] w-full py-6">
              <input
                type="text"
                name="username"
                value={values.username}
                onChange={onChange}
                placeholder="USERNAME"
                className="inputPlaceholders w-[80%] h-[6vh] px-[2vw] rounded-lg bg-white bg-opacity-[0.2] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white mt-2 text-[0.9vw] max-md:text-[1.5vh]"
              />
              <input
                type="text"
                name="first_name"
                value={values.first_name}
                onChange={onChange}
                placeholder="FIRST NAME"
                className="inputPlaceholders w-[80%] h-[6vh] px-[2vw] rounded-lg bg-white bg-opacity-[0.2] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white mt-2 text-[0.9vw] max-md:text-[1.5vh]"
              />
              <input
                type="text"
                name="last_name"
                value={values.last_name}
                onChange={onChange}
                placeholder="LAST NAME"
                className="inputPlaceholders w-[80%] h-[6vh] px-[2vw] rounded-lg bg-white bg-opacity-[0.2] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white mt-2 text-[0.9vw] max-md:text-[1.5vh]"
              />
              <input
                type="text"
                name="enrollment_number"
                value={values.enrollment_number}
                onChange={onChange}
                placeholder="ENROLLMENT NUMBER (C2K,I2K,E2K..,etc)"
                className="inputPlaceholders w-[80%] h-[6vh] px-[2vw] rounded -lg bg-white bg-opacity-[0.2] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white mt-2 text-[0.9vw] max-md:text-[1.5vh]"
              />
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={onChange}
                placeholder="EMAIL"
                required
                className="inputPlaceholders w-[80%] h-[6vh] px-[2vw] rounded-lg bg-white bg-opacity-[0.2] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white mt-2 text-[0.9vw] max-md:text-[1.5vh]"
              />
            </div>
          </div>
          <div className="w-[100%] h-[100%] max-sm:h-auto flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center max-sm:gap-0 gap-6 h-[100%] w-full py-6">
              <input
                type="tel"
                name="phone_number"
                value={values.phone_number}
                onChange={onChange}
                placeholder="PHONE NO."
                className="inputPlaceholders w-[80%] h-[6vh] px-[2vw] rounded-lg bg-white bg-opacity-[0.2] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white mt-2 text-[0.9vw] max-md:text-[1.5vh]"
              />
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={onChange}
                placeholder="PASSWORD"
                className="inputPlaceholders w-[80%] h-[6vh] px-[2vw] rounded-lg bg-white bg-opacity-[0.2] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white mt-2 text-[0.9vw] max-md:text-[1.5vh]"
              />
              <div className="radioButtons max-md:h-[15vh] h-[5vh] w-full flex justify-evenly items-center">
                <div className="junior flex justify-center items-center gap-[0.8vw]">
                  <input
                    className="h-5 w-5"
                    type="radio"
                    name="is_junior"
                    value="junior"
                    checked={values.is_junior === true}
                    onChange={handleRadioChange}
                  />
                  <span className="tracking-normal max-sm:text-[1.8vh]">
                    JUNIOR
                  </span>
                </div>
                <div className="senior flex justify-center items-center gap-[0.8vw]">
                  <input
                    className="h-5 w-5"
                    type="radio"
                    name="is_junior"
                    value="senior"
                    checked={values.is_junior === false}
                    onChange={handleRadioChange}
                  />
                  <span className="tracking-normal max-sm:text-[1.8vh]">
                    SENIOR
                  </span>
                </div>
              </div>
              <div className="w-[80%] flex justify-between items-start h-5">
                <h4
                  onClick={toLogin}
                  className="cursor-pointer tracking-normal text-[0.8vw] max-sm:text-[1.5vh]"
                >
                  Have an Account?
                </h4>
              </div>
              <div className="h-[11vh] max-sm:h-[9vh] w-full flex items-center justify-center">
                <Button content="SIGNUP" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </>
  );
}

function Button({ content }) {
  return (
    <button
      type="submit"
      className="loginButton bg-white text-black uppercase flex justify-center items-center max-sm:h-[5vh] max-sm:text-[2vh] w-[80%] h-12 border-none rounded-[0.6vw] cursor-pointer font-semibold"
    >
      {content}
    </button>
  );
}

export default SignupPage;