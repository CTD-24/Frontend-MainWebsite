import green from "../assets/greenPexel.jpg";
import cube from "../assets/blueCube.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import MainGradient from "../assets/MainBG.png";
// import MainGradient from "../assets/MainGradient.png";
import future from "./PageAssets/future.mp4";
import coder from "./PageAssets/Coder.mp4";
import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import TeamPage from "./TeamPage";

const LandingPage = () => {
  gsap.registerPlugin(ScrollTrigger);

  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span className="text-white text-[12vw]">
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  useEffect(() => {
    let t = gsap.timeline({
      scrollTrigger: {
        trigger: ".videoPage",
        start: "-40% 50%",
        end: "50% 50%",
        scrub: true,
        markers: true,
      },
    });

    t.to(
      ".futureVideo",
      {
        top: "0vh",
        height: "100vh",
        width: "100vw",
        duration: 2,
        borderRadius: "0vh",
        ease: "power1.inOut",
        opacity: "10%",
      },
      "anim"
    );
    t.to(
      ".text-box h1",
      {
        y: 150,
        opacity: 0,
        duration: 2,
        ease: "power1.inOut",
      },
      "anim"
    );
    t.to(
      ".text-box p",
      {
        y: 200,
        opacity: 0,
        duration: 2,
        ease: "power1.inOut",
      },
      "anim"
    );
    t.from(
      ".top-time h1",
      {
        y: -100,
        opacity: 0,
        duration: 2,
        ease: "power1.inOut",
      },
      "anim"
    );
  }, []);
  return (
    <>
        <img
          className="h-[100vh] w-[100vw] absolute top-0 left-0 z-[1] "
          src={MainGradient}
          alt=""
        />
        <div className="landingPage h-[100vh] w-[100vw] bg--500 flex justify-center items-center relative top-0 left-0 z-[2] ">
          <div className="text-box h-[50vh] w-[100vw] bg--500 flex flex-col  justify-center items-center">
            <h1 className="text-[12vw] text-white z-[1000] leading-[32vh]">
              CREDENZ TECH DAYZ
            </h1>
            <p className="text-white">The Annual Intra-College TechEvent</p>
          </div>
        </div>
        <div className="videoPage h-[100vh] w-[100vw] bg-[#181818] relative flex justify-center items-center ">
          {/* <video className="futureVideo h-[70vh] w-[60vw] object-cover absolute top-[-10vh] z-[1000] rounded-[2vh] opacity-[100%] " src={coder} autoPlay muted loop></video> */}
          <div className="timeBox h-[100vh] w-[100vw] absolute top-0 left-0  flex flex-col justify-center items-center z-[1000] opacity-[100%]">
            <div className="top-time h-[20vh] w-[100vw] bg--500 flex flex-col  justify-center items-center opacity-[100%] z-[2000]">
              <h1 className="text-white text-[10vw]">DAYZ LEFT</h1>
            </div>
            <div className="timeMain h-[40vh] w-[100vw] bg--500 flex flex-col  justify-center items-center opacity-[100%] z-[2000]">
              <div className="time">
                <Countdown
                  className="text-white"
                  date={Date.now() + 10000000}
                  renderer={renderer}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="eventsPage h-[100vh] w-[100vw] bg-[#88b0ff] relative flex justify-center items-center"></div>
        <div className="teamPage">
          <TeamPage />
        </div>
    </>
  );
};

export default LandingPage;
