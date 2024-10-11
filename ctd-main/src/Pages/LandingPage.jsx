import green from "../assets/greenPexel.jpg";
// import cube from "../assets/blueCube.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import MainGradient from "../assets/colorBg.jpg";
import code from "../assets/codeSticker.png";

// import MainGradient from "../assets/MainGradient.png";
import future from "./PageAssets/future.mp4";
import coder from "../assets/bgGrad.mp4";
import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import TeamPage from "./TeamPage";
import SplitType from "split-type";
// import {locomotiveScroll} from "locomotive-scroll";
import LocomotiveScroll from "locomotive-scroll";
import AboutPage from "./AboutPage";
import EventsPage from "./EventsPage";

import bgVideo from "../assets/wave3.mp4";
import wavebg from "../assets/wavebg.mp4";

import { FaArrowRight } from "react-icons/fa6";

import Footer from "../footer/Footer";
import CarouselComp from "../components/CarouselComp";

const LandingPage = () => {
  gsap.registerPlugin(ScrollTrigger);



  useEffect(() => {
    const arrowdiv = document.querySelector(".get-started-btn");
    arrowdiv.addEventListener("mouseenter", () => {
      gsap.to(".arrow", {
        rotate: "-45deg",
        ease: "power1.inOut",
      });
    });
    arrowdiv.addEventListener("mouseleave", () => {
      gsap.to(".arrow", {
        rotate: "45deg",
        ease: "power1.inOut",
      });
    });

    // (function () {
    //     const locomotiveScroll = new LocomotiveScroll();
    // })();

    let t = gsap.timeline({
      scrollTrigger: {
        trigger: ".videoPage",
        start: "-40% 50%",
        end: "50% 50%",
        scrub: true,
        markers: false,
      },
    });

    // t.to(".", {
    //     top:"0vh",
    //     height:"100vh",
    //     width:"100vw",
    //     duration:2,
    //     borderRadius:"0vh",
    //     ease:"power1.inOut",
    //     opacity: "50%"
    // },"anim")
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

    const myText = new SplitType(".my-text");

    const time = gsap.timeline();
    time
      .from(".char", {
        y: "30vh",
        stagger: 0.05,
        delay: 0.2,
        duration: 0.5,
        // ease:"power1.inOut"
      })
      .from(".mainPara", {
        y: "5vh",
        opacity: 0,
        delay: 0.2,
        duration: 1,
      });
  }, []);

  // useEffect(() => {
  //     HALO({
  //         el: '#vanta2',
  //         backgroundColor: "#181818"
  //       })

  // });

  return (
    <>
      <style>
        {`
                .my-text{
                    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
                }
            `}
      </style>
      <div className="l-main relative min-h-[100vh] w-[100vw] bg-transparent flex flex-col justify-center items-center">
        {/* <img className="h-[100vh] w-[100vw] absolute top-0 left-0 z-[1] " src={MainGradient} alt="" /> */}
        {/* <video className="h-[100vh] w-[100vw] absolute top-0 left-0 z-[1] object-cover opacity-[40%] " loop muted autoPlay="true" src={bgVideo}></video> */}
        {/* <video src=""></video> */}
        

        {/* <div className="back-g absolute top-0 h-[100vh] w-[100vw] z-[1] max-sm:object-cover object-cover opacity-[30%] max-sm:opacity-[20%]" id="vanta2"></div> */}

        <div className="landingPage  h-[100vh] w-[100vw] bg--500 flex flex-col justify-end py-[2vh] items-center top-[0%] relative z-[2000] ">
        {/* <img
          className=" h-[100vh] top-0 w-[100%] object-cover fixed  z-[1000] rounded-[2vh] opacity-[100%]"
          src={MainGradient}
          alt=""
        /> */}

          <div className="top-content absolute z-[500] bg--600 h-[100vh] w-full bg--500 flex  max-sm:flex-col max-sm:text-[2vw] leading-[11vh] justify-center items-center">
            <h1 className="my-text text-[12vw]  max-md:hidden max-sm:h-[10vh] bg--600 flex justify-center items-center text-white z-[1000] leading-[32vh]">
              CREDENZ TECH DAYZ
            </h1>

            {/* <div className="res-title h-auto w-[80%] max-md:block md:hidden flex justify-center items-center bg-red-600 text-[8vh] text-white"> */}
              <h1 className="max-md:block md:hidden flex justify-center items-center bg--600 text-[12vh] text-white" >CREDENZ</h1>
              <h1 className="max-md:block md:hidden flex justify-center items-center bg--600 text-[12vh] text-white" >TECH</h1>
              <h1 className="max-md:block md:hidden flex justify-center items-center bg--600 text-[12vh] text-white" >DAYZ</h1>
            {/* </div> */}

            <button className="get-started-btn max-sm:w-[25%] h-[8vw] w-[22%] hidden justify-between items-center rounded-full px-[0.6vw] bg-[#00CDD6]">
              <div className="get-text w-[50%] h-full flex justify-center items-center">
                <h2 className="text-[2vw] w-[60%] h- max-sm:w-[70%] bg--600 text-start leading-[1.2]">
                  GET STARTED
                </h2>
              </div>
              <div className="arrow-circle h-[7vw] w-[7vw] rounded-full bg-[#1896B6] relative flex justify-center items-center ">
                <FaArrowRight
                  size="2vw"
                  className={`arrow rotate-[45deg]  z-[7000]`}
                />
              </div>
            </button>
          </div>
          {/* <img src={code} alt="" className=" z-[100] opacity-[100%] h-[30vh] w-[80%]  rotate-[20deg] max-sm:block md:hidden" /> */}

          <div className="videoDiv h-[100vh] w-[100%] bg-[] z-[400] flex justify-center items-center relative ">
            <div className="video-bottom h-full w-full flex justify-between py-[2vh] px-[2vw] items-end absolute  z-[2000] rounded-[2vh]  text-white max-sm:text-[2.2vw]  ">
              <div className="flex justify-between w-full">
              <h2 className="w-fit">The Annual Intra-College Tech-Fest</h2>
              <h2 className="w-fit">PUNE, MH, 18.4575° N, 73.8508° E</h2>
              <a href="https://www.pictieee.in/" target="_blank" rel="noopener noreferrer">
              <h2 className="w-fit cursor-pointer">PICT IEEE Student Branch (PISB)</h2>
              </a>

      
              </div>
            </div>
          </div>
        </div>
        {/* <div className="aboutPage bg--600 h-[100vh] w-[100vw] max-md:h-[80vh] text-white text-[1.5vw] relative flex justify-center items-center">
          
          <h2 className="text-center w-[80%] max-md:text-[2vh] max-md:w-[90%] " >Credenz Tech Dayz, the annual intra-college techfest organized by the PICT IEEE Student Branch, gathers PICT's brightest minds for competitions such as the National Computing Contest and Reverse Coding. Among its highlights, Decode Rush stands out—a captivating outdoor quest that tests participants' problem-solving skills through a series of clues and riddles, promising an immersive adventure experience.</h2>
        </div> */}
        {/* <div className="videoPage h-[100vh] max-md:h-[40vh] w-[100vw] bg--500 relative flex justify-center items-center ">
          <div className="timeBox h-[100vh] bg--300 max-md:h-[40vh] w-[100vw] absolute top-0 left-0  flex flex-col justify-center items-center z-[1000] opacity-[100%]">
            <div className="top-time h-[20vh] max-md:h-[10vh] bg--700 w-[100vw] bg--500 flex flex-col  justify-center items-center opacity-[100%] z-[2000]">
              <h1 className="text-white text-[10vw]">TIME LEFT</h1>
            </div>
            <div className="timeMain h-[40vh] max-md:h-[10vh] w-[100vw] bg--500 flex flex-col  justify-center items-center opacity-[100%] z-[2000]">
              <div className="time">
                <Countdown
                  className="text-white"
                  date={Date.now() + 10000000}
                  renderer={renderer}
                />
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="eventsPage min-h-[100vh] w-[100vw] z-[2000] bg-zinc-700 relative flex justify-center items-center">
          <EventsPage />
        </div> */}

        
        {/* <div className="eventsPage h-[100vh] w-[100vw] bg-[#181818] relative flex justify-center items-center">

               </div> */}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default LandingPage;
