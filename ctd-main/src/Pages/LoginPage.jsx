// import React, { useState, useContext } from "react";
import { useState } from "react";
import loginBG from "../assets/LoginBG.png";
import MainGradient from "../assets/MainBG.png";

import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
// import usePerson from "../context/user";
import { onLogin } from "../api/auth";

import Cookies from 'js-cookie';
const getToken = () => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; jwt=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};
function LoginPage() {

    const navigate = useNavigate();

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState(false);

    // const {setUser, setImg} = useContext(UserContext);

    const handleSubmit = async (e)=>{
      e.preventDefault();
      try {
        const response = await onLogin({
          username: username,
          password: password
        });
        console.log("API Response:", response); // Log the full response
        console.log("Login Successfull");
        // navigate("/signup");
        const token = getToken();
        console.log(token);
        setError(false);
      } catch (error) {
        setError(true);
        console.log("Error logging in ", error)
      }
    }


    // const handleSubmit = (e) => {
    //   navigate("/dashboard");
    //   e.preventDefault()
    //   setUser({username, password});
    //   // setImg({image});
    // }

    // const handleImageChange = (e) => {
    //   const file = e.target.files[0];
    //   if (file) {
    //     const imageUrl = URL.createObjectURL(file); // Convert file to URL
    //     setImg(imageUrl); // Set this URL to the context
    //   }
    // };


    const toSignup = () => {
      navigate("/signup");
    }

  return (
    <div className="flex justify-center items-center loginContainer h-[100vh] w-[100vw] pt-[8vh] ">
      <img
        className="h-[100%] w-[100%] absolute top-0 left-0 z-[1] object-cover"
        src={MainGradient}
        alt=""
      />

      <div className="absolute z-[2] flex flex-col justify-center items-center h-[70vh] w-[30vw] bg-white bg-opacity-[0.15] shadow-lg backdrop-blur-[8.5px] rounded-xl text-white uppercase tracking-[0.4vw]">
        <h1 className=" text-[5vw]">LOGIN</h1>
        <div className=" bg--700 flex flex-col justify-evenly items-center  h-[35%] w-full">
        <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="USERNAME"
              className="inputPlaceholders w-[80%] h-[6vh] max-md-[1920px]:h-[5vh] px-[2vw] rounded-lg bg-white bg-opacity-[0.2] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white tracking-normal mt-2 text-[0.9vw]"
            />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="PASSWORD"
            className="inputPlaceholders w-[80%] h-[6vh] max-md-[1920px]:h-[5vh] px-[2vw] rounded-lg bg-white bg-opacity-[0.2] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white tracking-normal mt-2 text-[0.9vw]"
          />  

          {/* <input
            type="file"
            // accept="image/*"  // This ensures only images can be selected
            // onChange={handleImageChange}
            className="inputPlaceholders w-[80%] h-[6vh] flex justify-center items-center px-[2vw] rounded-lg bg-white bg-opacity-[0.2] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white tracking-normal mt-2 text-[0.9vw]"
          /> */}
        </div>
        <div className="w-[80%] flex justify-between items-start bg--400  h-10">
          <h4 className="cursor-pointer tracking-normal text-[0.8vw]">Forgot Password?</h4>
          <h4 onClick={toSignup} className="cursor-pointer tracking-normal text-[0.8vw]">No Account?</h4>
        </div>
        <div className="mt-4 mb-8 w-full flex items-center justify-center">
        <button 
          onClick={handleSubmit}
          className="loginButton bg-white hover:bg-slate-400 text-black text-uppercase flex justify-center items-center  w-[80%] h-[6vh] border-none rounded-[0.6vw] cursor-pointer font-semibold tracking-normal text-[1vw]">
          LOGIN
        </button>
        </div>
      </div>
    </div>
  );
}

function Button({ content }) {
  return (
    <button 
      onClick={handleSubmit}
    className="loginButton bg-white text-black text-uppercase flex justify-center items-center  w-[80%] h-[6vh] border-none rounded-[0.6vw] cursor-pointer font-semibold tracking-normal text-[1vw]">
      {content}
    </button>
  );
}

// function Input({ type, placeholder, value }) {
//   return (
//     <input
//       type={type}
//       value={value}
      
//       placeholder={placeholder}
//       className="inputPlaceholders w-[80%] h-[6vh] max-md-[1920px]:h-[5vh] px-[2vw] rounded-lg bg-white bg-opacity-[0.2] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white tracking-normal mt-2 text-[0.9vw]"
//     />
//   );
// }

export default LoginPage;
