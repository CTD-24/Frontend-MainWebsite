import { FaArrowRight } from "react-icons/fa6";
import gsap from "gsap";
import ecard from "../assets/ecard.png"; 
import Rules from "./Rules";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const EventCard = ({onButtonClick}) => {

    const [slide, setSlide] = useState(false);

        const eventSlider = () => {
            setSlide(true);
            let t = gsap.timeline()
            t.to(".eventImg", {
                width:"50%",
                ease:"power1.inOut",
                duration:1,

            },"first");
            t.to(".innerbox", {
                alignItems:"start"
            },"first");
            t.to(".eventButton, .circle", {
                display:"none",
                opacity:0
            },"first");
            t.to(".eventName h1, .eventName h3", {
                // justifyContent:"start",
                y:"-30vh",
                ease:"power1.inOut",
                duration:1
            });
            t.to(".mainTop",{
                zIndex:10000,
                backgroundColor:"transparent"
            })
            t.from(".allRules",{
                stagger:0.2,
                duration:1,
                delay:1,
                ease:"power1.inOut",
                opacity:0
            },"first")
            t.to(".regEvent",{
                display:"flex",
                opacity:1
            })
            

        }

        const closeSlider = () => {
            setSlide(false);
            let t = gsap.timeline()
            t.to(".eventImg", {
                width:"100%",
                ease:"power1.inOut",
                duration:1,

            },"one")
            .to(".innerbox", {
                alignItems:"start"
            },"one")
            .to(".eventButton, .circle", {
                display:"flex",
                opacity:1,
                ease:"power1.inOut"
            },"one")
            .to(".eventName h1, .eventName h3", {
                y:"0vh",
                ease:"power1.inOut",
                duration:1
            },"one");
            t.to(".mainTop",{
                zIndex:100,
                backgroundColor:"transparent"
            },"one")
            t.to(".regEvent",{
                display:"none",
                opacity:0
            },"one")
        }

       

    return ( 
        <>
            <div className="innerbox w-[100%] h-[95%] bg-[#282828] rounded-[2vw] flex flex-col justify-end items-center relative ">
                <div className="mainTop w-full h-full  rounded-[2vw] flex  justify-end items-center absolute z-[100]">
                    <div className="eventtop w-[50%] h-full bg--400 rounded-[2vw] flex flex-col justify-center items-center z-[100]">
                        <div className=" w-full h-[20%] bg--400 flex justify-between items-center px-[2vw] relative ">
                            <select className="px-[2.5vw] py-[1vh] rounded-[2vw]">
                                <option value="RULES">
                                    RULES
                                </option>
                            </select>
                            <button onClick={closeSlider} className="backBtn bg-white rounded-full h-[8vh] w-[8vh] flex  justify-center items-center z-[1300] "><FaArrowRight size="1vw" className={`arrow-team arrow-team-${name} rotate-[-180deg] `}/></button>
                        </div>
                        <div className="allRules w-full h-[80%] flex justify-start items-center flex-col gap-[8vh]  bg--400">
                            <Rules/>
                            <Rules/>
                            <Rules/>
                        </div>
                    </div>
                </div>
                <img src={ecard} className="eventImg absolute object-fill h-full w-full rounded-[2vw] z-[1000]" />
                <div className=" w-full h-[100%] flex flex-row justify-center item-center relative bg--400 z-[1200]">
                    <div className="eventName relative w-[50%] h-[100%] flex flex-col justify-end item-center bg--400 py-[3vw] px-[4vw]">
                        <h1 className="text-[8vw] bg--500 h-[16vh] flex justify-start items-center text-white">NCC</h1>
                        <h3 className="text-[1vw] bg--500 h-[6vh] tracking-widest font-light flex justify-start items-center text-white">The annual intra-college Tech-Fest</h3>

                        <Link to="/cart" className=" regEvent opacity-0 max-sm:hidden hidden h-[5vh] w-[9vw] justify-center items-center bg-white rounded-full text-[#191919] text-[1.1vw] font-regular absolute bottom-[10%]">REGISTER</Link>

                    </div>
                    <div className="  h-[100%] w-[50%] bg--500 flex justify-end items-end  p-[4vw]">
                            <button onClick={eventSlider} className="eventButton bg-white rounded-full h-[10vh] w-[10vh] flex  justify-center items-center z-[1200] absolute"><FaArrowRight size="1.2vw" className={`arrow-team arrow-team-${name} rotate-[-45deg] absolute z-[1200] `}/></button>
                            <div className={`circle circle-${name} bg-white rounded-full h-[10vh] w-[10vh] flex justify-center items-center absolute `}></div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default EventCard;