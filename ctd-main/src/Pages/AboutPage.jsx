
import about from "../assets/aboutBG.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

import ctdLogo from "../assets/ctdlogo.png"

const AboutPage = () => {

    useEffect(() => {
        let t = gsap.timeline({
            scrollTrigger: {
                trigger: ".aboutPage",
                start: "20% 50%",
                end: "50% 50%",
                scrub: true,
                // markers: true,
                // pin:true
            }
        });

        t.to(".aboutBack", {
            top:"0vh",
            height:"100vh",
            width:"100vw",
            duration:2,
            ease:"power1.inOut",
        },"anim")
        t.to(".allAbout", {
            display:"flex",
            duration:0.8,
            ease:"power1.inOut",
            opacity:1
        })

        
    }, [])
    return ( 
        <>
            <div className="aboutContainer h-[100vh] w-[100vw] bg-[#1818188d] flex flex-col justify-end items-center ">
                {/* <div className="aboutTitle h-[20%] w-full bg--600 flex flex-col justify-center items-start px-[4vw]  text-white  ">
                    <h1 className="text-[5vw] bg--500 h-[16vh] flex justify-center items-center max-sm:text-[7vh]">ABOUT</h1>
                    
                </div> */}
                <div className="aboutMain  h-[100%] w-full bg--700 flex justify-center items-start relative overflow-y-auto   ">
                    {/* <img src={about} alt="" className=" absolute opacity-[90%] overflow-hidden aboutBack rounded-[1.5vw] object-cover z-[10] w-[93%] " /> */}
                    <div className="aboutScroll  min-h-[100vh] w-[100vw] flex flex-col justify-between items-center ">

                        <div className="top-content-about h-[100vh] w-[80%] bg--700 flex flex-col justify-center items-center text-white text-center gap-[2vh] ">
                            <img className="h-[20vw] w-[35vw] " src={ctdLogo} alt="" />
                            <p className="text-[1.1vw]">Credenz Tech Dayz is an intra-college annual techfest organized by the PICT IEEE Student Branch where the brightest minds of PICT compete in technical as well as non-technical events. Participants get a chance to test their logical aptitute and problem solving skills in events like National Computing Contest, Reverse Coding and Enigma. Decode Rush is a unique and immersive outdoor quest designed to ignite your sense of adventure. Participants embark on a thrilling scavenger hunt, armed with just two crucial elements: a clue that leads to the next location and a riddle that holds the answer</p>
                        </div>

                        {/* <div className="other-content-about h-[100vh] w-full bg-purple-700 flex flex-col justify-center items-center  ">

                        </div> */}
                        {/* <div className="allAbout bg-zinc-800 opacity-0 py-[5vh] h-auto min-w-[100vw] z-[100] bg--500 flex-col justify-center items-center">
                            <div className="ieee h-[15vh] w-full bg--600 flex justify-start items-center px-[6vw] text-[6vw] text-white">
                                <h1>IEEE</h1>
                            </div>
                            <div className="ieee h-[25vh] w-full bg--600 flex flex-col justify-center items-start px-[6vw] ">
                                <div className="paraAbout  h-[100%] w-[80%] bg--600 flex flex-col justify-center items-start text-white gap-[2vh]">
                                    <p>The <strong>Institute of Electrical and Electronics Engineers (IEEE)</strong> is a global organization that serves as a hub for scientific expertise. </p>
                                    <p>IEEE continues to attract students, faculty and professionals from  various fields all around the world and is committed to incorporate  diversity in thoughts which is essential for scientific development.</p>
                                    <p>IEEE currently has Student Branches at thousands of universities and colleges in hundreds of countries throughout the world.</p>
                                </div>
                            </div> 
                        </div>
                        <div className="allAbout opacity-0 h-auto min-w-[100vw] py-[5vh] z-[100] bg-zinc-800 flex-col justify-center items-center">
                            <div className="ieee h-[15vh] w-full bg--600 flex justify-start items-center px-[6vw] text-[6vw] text-white">
                                <h1>PISB</h1>
                            </div>
                            <div className="ieee h-[25vh] w-full bg--600 flex flex-col justify-center items-start px-[6vw] ">
                                <div className="paraAbout  h-[100%] w-[80%] bg--600 flex flex-col justify-center items-start text-white gap-[2vh]">
                                    <p> <strong>PICT IEEE Student Branch (PISB)</strong> was established in the year 1998 with the aim of inculcating the sense of technical awareness amongst its student members. PISB endeavers to escalate the knowledge and trends in the diverse field of technologies amongst its members. PISB upholds two major events every year, Credenz and Credenz Tech Dayz with the first one being conducted in the even semester and the second one in the odd semester.</p>
                                    <p>PISB is also marked by its Women in Engineering (WIE) chapter, an initiative for impowerment of women in the technical domain. PISB has been awarded the Best Student Branch of IEEE in Pune section.</p>
                                    
                                </div>
                            </div> 
                        </div>
                        <div className="allAbout opacity-0  h-auto min-w-[100vw] z-[100] py-[5vh] bg-zinc-800 flex-col justify-center items-center">
                            <div className="ieee h-[15vh] w-full bg--600 flex justify-start items-center px-[6vw] text-[6vw] text-white">
                                <h1>P.I.N.G.</h1>
                            </div>
                            <div className="ieee h-[25vh] w-full bg--600 flex flex-col justify-center items-start px-[6vw] ">
                                <div className="paraAbout  h-[100%] w-[80%] bg--600 flex flex-col justify-center items-start text-white gap-[2vh]">
                                    <p> <strong>PICT IEEE Newsletter Group (P.I.N.G.)</strong> is the official technical magazine of PISB. P.I.N.G. serves as a platform for individuals to portray their technical ingenuity. It highlights articles on cutting-edge technologies from technocrats all around the globe including students, industrialists and faculty members.</p>
                                    <p>P.I.N.G. serves as a platform for individuals to portray their technical ingenuity. It highlights articles on cutting-edge technologies from technocrats all around the globe including students, industrialists and faculty members. It also features interviews of distinguished personalities in various technical domains.</p>
                                    
                                </div>
                            </div> 
                        </div> */}
                        
                    </div>
                </div>
            </div>
            
        </>
     );
}
 
export default AboutPage;