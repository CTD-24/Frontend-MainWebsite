import React, { useState } from "react";
import loginBG from "../assets/LoginBG.png";
import MainGradient from "../assets/MainBG.png";

import { useNavigate } from "react-router-dom";
// import { onRegistration } from "../api/auth";




function SignupPage() {

    const navigate = useNavigate();

    const toSignup = () => {
      navigate("/login");
    }

    const [values,setValues] = useState({
      email: '',
      password: '',
    })

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const [username,setUsername] = useState('');

    const onChange = (e) => {
      setValues({...values, [e.target.name] : e.target.value})

    }


    const onSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await onRegistration(values)
        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    }


    // console.log("VALUES: ", values);

  return (
    <div className="flex justify-center items-center loginContainer h-[100vh] w-[100vw] pt-[8vh] ">
      <img
        className="h-[100%] w-[100%] absolute top-0 left-0 z-[1] object-cover"
        src={MainGradient}
        alt=""
      />

      <form 
      onSubmit={(e) => {
          onSubmit(e)
      }} 
      className="absolute z-[2] max-sm:top-[15%] flex flex-col justify-center items-center max-sm:h-[75vh] h-[70vh] max-sm:w-[90vw]  w-[75vw] bg-white bg-opacity-[0.15] shadow-lg backdrop-blur-[8.5px] rounded-xl text-white uppercase tracking-[0.4vw]">

        {/* Contents of Regsiter form */}
        <h1 className=" text-[5vw] max-sm:text-[10vh] h-[20%] w-full flex justify-center items-start bg--500">SIGNUP</h1>
        <div className="signupForm h-[80%] w-full bg--500 max-sm:flex-col flex justify-center items-center">
          <div className="signLeft w-[100%] h-[100%] max-sm:h-[40%] bg--500 flex flex-col justify-center items-center ">
            <div className=" bg--700 flex flex-col justify-center items-center max-sm:gap-0 max-sm:py-0 max-sm:justify-around gap-6 h-[100%] w-full py-6">
              {/* <Input type="text" placeholder="USERNAME" /> */}
              {/* <Input type="text" placeholder="FIRST NAME" /> */}
              {/* <Input type="text" placeholder="LAST NAME" />
              <Input type="email" placeholder="EMAIL" /> */}
              <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="FIRST NAME"
              className="inputPlaceholders w-[80%] h-[6vh] max-md-[1920px]:h-[5vh] px-[2vw] rounded-lg bg-white bg-opacity-[0.2] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white tracking-normal mt-2 text-[0.9vw]"
            />
            
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={(e) => onChange(e)}
              placeholder="EMAIL"
              required
              className="inputPlaceholders w-[80%] h-[6vh] max-md-[1920px]:h-[5vh] px-[2vw] rounded-lg bg-white bg-opacity-[0.2] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white tracking-normal mt-2 text-[0.9vw]"
            />

            </div>
          </div>
          <div className="signLeft w-[100%] h-[100%] max-sm:h-[60%] bg--500 flex flex-col justify-center items-center ">
            <div className=" bg--700 flex flex-col justify-center items-center max-sm:gap-0 max-sm:py-0 max-sm:justify-around gap-6 h-[100%] w-full py-6">


              <Input type="tel" placeholder="PHONE NO." />
              {/* <Input type="text" placeholder="PASSWORD" /> */}
              <input
              type="password"
              name="password"
              value={values.password}
              onChange={(e) => onChange(e)}
              placeholder="PASSWORD"
              className="inputPlaceholders w-[80%] h-[6vh] max-md-[1920px]:h-[5vh] px-[2vw] rounded-lg bg-white bg-opacity-[0.2] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white tracking-normal mt-2 text-[0.9vw]"
            />



              <div className="radioButtons bg--500 h-[5vh] w-full bg--400 flex justify-evenly items-center">
                <div className="junior flex justify-center items-center gap-[0.8vw]">
                  <input className="h-5 w-5 border-none " type="radio"  />
                  <span className="tracking-normal max-sm:text-[1.8vh]">JUNIOR</span>
                </div>
                <div className="senior flex justify-center items-center gap-[0.8vw]">
                  <input className="h-5 w-5 border-none " type="radio" />
                  <span className="tracking-normal max-sm:text-[1.8vh]">SENIOR</span>
                </div>
              </div>
              <div className="w-[80%] flex justify-between items-start bg--400  h-5">
                <h4 onClick={toSignup} className="cursor-pointer tracking-normal text-[0.8vw] max-sm:text-[1.5vh]">Have an Account?</h4>
              </div>
              <div className="h-[11vh] max-sm:h-[9vh] bg--600 w-full flex items-center justify-center">
                <Button content="SIGNUP" />
              </div>

            </div>
          </div>
        </div>
        {/* <div className=" bg--700 flex flex-col justify-center items-center gap-8 h-[40%] w-full py-6">
          <Input type="text" placeholder="USERNAME" />
          <Input type="password" placeholder="PASSWORD" />
        </div> */}
        {/* <div className="w-[80%] flex justify-between items-start bg--400  h-10">
          <h4 onClick={toSignup} className="cursor-pointer tracking-normal text-[0.8vw]">Have an Account?</h4>
        </div> */}
        {/* <div className="h-24 bg--600 w-full flex items-center justify-center">
          <Button content="SIGNUP" />
        </div> */}
      </form>
    </div>
  );
}

function Button({ content }) {
  return (
    <button type="submit" className="loginButton bg-white text-black text-uppercase flex justify-center items-center max-sm:h-[5vh] max-sm:text-[2vh]  w-[80%] h-12 border-none rounded-[0.6vw] cursor-pointer font-semibold tracking-normal">
      {content}
    </button>
  );
}

function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="inputPlaceholders w-[80%] max-sm:w-[85%] md:h-12 max-sm:px-[2vh] px-[2vw] rounded-lg bg-white max-sm:text-[1.5vh] bg-opacity-[0.2] max-sm:h-[6vh] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white tracking-normal mt-2 md:text-[0.9vw]"
    />
  );
}

export default SignupPage;
