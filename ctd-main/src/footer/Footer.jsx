import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const Footer = () => {
    useEffect(() => {
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".footerMain",
                start: "0% 60%",
                end: "45% 70%",
                scrub: true,
                // markers: true,
                // pin:true
            }
        });

        t1.from(".footName", {
            y:"30vh",
            duration:2,
            // delay:3,
            ease:"power1.inOut",

        })

        

        
    }, [])
    return ( 
        <>
            <div className="footerMain h-[60vh] w-full bg-[#1f1f1f] flex flex-col justify-center items-center relative overflow-hidden">
                <div className="footerLinks h-[80%] w-full bg--400 flex justify-center items-center">
                    <h1 className="text-white text-[1.5vw] tracking-wide">Made By PISB Web Team ✨</h1>
                </div>
                <div className="footerName h-[20%] w-full bg--400 flex justify-center items-center relative">
                    <h1 className="footName h-full w-full bg--600 flex justify-center items-center text-[18vw] absolute top-[0vh] text-[#404040] ">CREDENZ TECH DAYZ</h1>
                </div>
            </div>
        </>
     );
}
 
export default Footer;