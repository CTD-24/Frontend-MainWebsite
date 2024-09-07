import green from "../assets/greenPexel.jpg";
import cube from "../assets/blueCube.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import MainGradient from "../assets/MainBG.png";
import code from "../assets/codeSticker.png";

// import MainGradient from "../assets/MainGradient.png";
import future from "./PageAssets/future.mp4";
import coder from "./PageAssets/Coder.mp4";
import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import TeamPage from "./TeamPage";
import SplitType from 'split-type';
// import {locomotiveScroll} from "locomotive-scroll";
import LocomotiveScroll from 'locomotive-scroll';
import AboutPage from "./AboutPage";



const LandingPage = () => {
  gsap.registerPlugin(ScrollTrigger);

    const locomotiveScroll = new LocomotiveScroll();

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

        (function () {
            const locomotiveScroll = new LocomotiveScroll();
        })();

        let t = gsap.timeline({
            scrollTrigger: {
                trigger: ".videoPage",
                start: "-40% 50%",
                end: "50% 50%",
                scrub: true,
                markers: false
            }
        });

        t.to(".futureVideo", {
            top:"0vh",
            height:"100vh",
            width:"100vw",
            duration:2,
            borderRadius:"0vh",
            ease:"power1.inOut",
            opacity: "50%"
        },"anim")
        t.to(".text-box h1", {
            y:150,
            opacity:0,
            duration:2,
            ease:"power1.inOut",
        },"anim")
        t.to(".text-box p", {
            y:200,
            opacity:0,
            duration:2,
            ease:"power1.inOut",
        },"anim")
        t.to(".landingPage", {
            backgroundColor:"#181818",
            duration:1,
            ease:"power1.inOut",
        },"anim")
        t.from(".top-time h1", {
            y:-100,
            opacity:0,
            duration:2,
            ease:"power1.inOut",
        },"anim")

        const myText = new SplitType(".my-text");

        const time = gsap.timeline();
        time
        .from(".char", {
            y:"30vh",
            stagger:0.05,
            delay:0.2,
            duration:0.5,
            // ease:"power1.inOut"
        })
        .from(".mainPara", {
            y:"5vh",
            opacity:0,
            delay:0.2,
            duration:1
        })


    }, []);
    return ( 
        <>
        <style>
            {`
                .my-text{
                    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
                }
            `}
        </style>
               <img className="h-[100vh] w-[100vw] absolute top-0 left-0 z-[1] " src={MainGradient} alt="" />
               <div className="landingPage  h-[100vh] w-[100vw] bg--500 flex justify-center items-center relative top-0 left-0 z-[2] ">
                    <div className="text-box h-[50vh] w-[100vw] bg--500 flex flex-col  justify-center items-center max-sm:h-[50vh]">
                        <h1 className="my-text text-[12vw] max-sm:text-[16vw] text-white z-[1000] leading-[32vh] max-sm:hidden md:block">CREDENZ TECH DAYZ</h1>
                        <img src={code} alt="" className=" z-[100] absolute top-[20%] right-[0%] rotate-[20deg] max-sm:block md:hidden" />
                        <div className="resp-Text h-[50vh] w-full bg--500 flex flex-col justify-center items-center md:hidden z-[1] ">
                            <h1 className="resp-h1 text-[15vh] leading-[13vh] text-white">CREDENZ</h1>
                            <h1 className="resp-h1 text-[15vh] leading-[13vh] text-white">TECH</h1>
                            <h1 className="resp-h1 text-[15vh] leading-[13vh] text-white">DAYZ</h1>
                        </div>
                        {/* <h1 className="text-[12vw] text-white z-[1000] leading-[32vh]">
                        {Array.from("CREDENZ TECH DAYZ").map((letter, index) => (
                            <span key={index} className="text-letter">{letter}</span>
                        ))}
                    </h1> */}
                        <p className= " mainPara text-white max-sm:text-[4vw]">The Annual Intra-College TechEvent</p>
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
                                <Countdown  className="text-white" date={Date.now() + 10000000} renderer={renderer}/>
                            </div>
                        </div>
                    </div>
               </div>
               <div className="eventsPage h-[100vh] w-[100vw] bg-[#181818] relative flex justify-center items-center">

               </div>

               <div className="aboutPage min-h-[100vh] w-[100vw] bg-white relative flex justify-center items-center">
                  <AboutPage/>
               </div>
               <div className="eventsPage h-[100vh] w-[100vw] bg-[#181818] relative flex justify-center items-center">

               </div>
               
        </>
     );
}
 
export default LandingPage;
