import green from "../assets/greenPexel.jpg";
// import cube from "../assets/blueCube.jpg";
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
import EventsPage from "./EventsPage";

import bgVideo from '../assets/wave3.mp4'
import { FaArrowRight } from "react-icons/fa6";

import Footer from "../footer/Footer";


// import HALO from 'vanta/src/vanta.halo';





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
        const arrowdiv = document.querySelector(".get-started-btn");
    arrowdiv.addEventListener("mouseenter", () => {
        gsap.to(".arrow", {
            rotate:"-45deg",
            ease:"power1.inOut"
        })
    } )
    arrowdiv.addEventListener("mouseleave", () => {
        gsap.to(".arrow", {
            rotate:"45deg",
            ease:"power1.inOut"
        })
    } )

        // (function () {
        //     const locomotiveScroll = new LocomotiveScroll();
        // })();

        let t = gsap.timeline({
            scrollTrigger: {
                trigger: ".videoPage",
                start: "-40% 50%",
                end: "50% 50%",
                scrub: true,
                markers: false
            }
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
               <div className="landingPage  h-[100vh] w-[100vw] bg--500 flex flex-col justify-end py-[2vh] items-center top-[10%] relative z-[2] ">
                        <div className="top-content h-[25vh] w-full bg--500 flex max-sm:flex-col max-sm:text-[2vw] justify-evenly items-center">
                            <h1 className="my-text text-[12vw] max-sm:text-[16vw] max-sm:h-[10vh] bg-red-600 flex justify-center items-center text-white z-[1000] leading-[32vh]">CREDENZ TECH DAYZ</h1>
                            <button className="get-started-btn max-sm:w-[25%] h-[8vw] w-[22%] flex justify-between items-center rounded-full px-[0.6vw] bg-[#00CDD6]">
                                <div className="get-text w-[50%] h-full flex justify-center items-center">
                                    <h2 className="text-[2vw] w-[60%] h- max-sm:w-[70%] bg-red-600 text-start leading-[1.2]" >GET STARTED</h2>

                                </div>
                                <div className="arrow-circle h-[7vw] w-[7vw] rounded-full bg-[#1896B6] relative flex justify-center items-center ">
                                    <FaArrowRight size="2vw" className={`arrow rotate-[45deg]  z-[7000]`}/>
                                </div>
                            </button>
                        </div>
                        {/* <img src={code} alt="" className=" z-[100] opacity-[100%] h-[30vh] w-[80%]  rotate-[20deg] max-sm:block md:hidden" /> */}
                        
                        <div className="videoDiv h-[55vh] w-[90%] bg-[#181818] flex justify-center items-center relative ">
                            <video className="futureVideo h-[100%] w-[100%] object-cover absolute  z-[1000] rounded-[2vh] opacity-[50%] " src={coder} autoPlay muted loop></video>
                            <div className="video-bototm bg-[#18181800] h-full w-full flex justify-between py-[2vh] px-[2vw] items-end absolute  z-[2000] rounded-[2vh]  text-white max-sm:text-[2.2vw]  ">
                                <h2>The annual intra-college Tech-Fest</h2>
                                <h2>PUNE, MH, 18.4575° N, 73.8508° E</h2>
                                <h2>2024</h2>

                            </div>
                        </div>
                        {/* <div className="resp-Text h-[50vh] w-full bg--500 flex flex-col justify-center items-center md:hidden z-[1] ">
                            <h1 className="resp-h1 text-[15vh] leading-[13vh] text-white">CREDENZ</h1>
                            <h1 className="resp-h1 text-[15vh] leading-[13vh] text-white">TECH</h1>
                            <h1 className="resp-h1 text-[15vh] leading-[13vh] text-white">DAYZ</h1>
                        </div> */}
                        {/* <p className= " mainPara text-white max-sm:text-[4vw]">The Annual Intra-College TechEvent</p> */}
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
               <div className="eventsPage min-h-[100vh] w-[100vw] bg-[#181818] relative flex justify-center items-center" style={{ marginTop: '5vh' }}>
                  <EventsPage/>
               </div>

               <div className="aboutPage min-h-[100vh] w-[100vw] bg-white relative flex justify-center items-center"  style={{ marginTop: '5vh' }}>
                  <AboutPage/>
               </div>
               {/* <div className="eventsPage h-[100vh] w-[100vw] bg-[#181818] relative flex justify-center items-center">

               </div> */}
            </div>
            <Footer/>

               
        </>
     );
}
 
export default LandingPage;
