import React from "react";
import loginBG from "../assets/LoginBG.png";

function LoginPage() {
  return (
    <div className="flex justify-center items-center loginContainer h-[100vh] w-[100vw] ">
      <img
        className="h-[100%] w-[100%] absolute top-0 left-0 z-[1] object-cover"
        src={loginBG}
        alt=""
      />

      <div className="absolute z-[2] flex flex-col items-center h-[75vh] w-[35vw] bg-white bg-opacity-[0.15] shadow-lg backdrop-blur-[8.5px] rounded-xl text-white uppercase tracking-[0.4rem]">
        <h1 className="mt-12 mb-2 text-[5vw]">LOGIN</h1>
        <div className="flex flex-col justify-around items-center h-[40%] w-full">
          <Input type="text" placeholder="USERNAME" />
          <Input type="password" placeholder="PASSWORD" />
        </div>
        <div className="w-[80%] flex justify-start items-start h-[6vh]">
          <h4 className="cursor-pointer tracking-normal">Forgot Password?</h4>
        </div>
        <div className="mt-4 mb-8 w-full flex items-center justify-center">
          <Button content="LOGIN" />
        </div>
      </div>
    </div>
  );
}

function Button({ content }) {
  return (
    <button className="loginButton bg-white text-black text-uppercase tracking-[0.2rem] w-[80%] h-12 border-none rounded-2xl cursor-pointer font-bold tracking-normal">
      {content}
    </button>
  );
}

function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="inputPlaceholders w-[80%] h-[8vh] px-[2vw] rounded-lg bg-white bg-opacity-[0.2] text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white tracking-normal mt-2"
    />
  );
}

export default LoginPage;
