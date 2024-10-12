import { FaArrowRight } from "react-icons/fa6";
import gsap from "gsap";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

const TeamCards = ({
  name,
  role,
  image,
  isSpread,
  onButtonClick,
  github,
  gmail,
  linkedin,
}) => {
  useEffect(() => {
    if (isSpread) {
      gsap.to(`.circle-${name}`, {
        scale: 20,
        ease: "power4.inOut",
        duration: 1,
      });
      gsap.to(`.member-links-${name}`, {
        scale: 1,
        ease: "power4.inOut",
        duration: 1,
        opacity: 1,
      });
      gsap.to(`.arrow-team-${name}`, {
        ease: "power4.inOut",
        duration: 1,
        rotate: "-180deg",
      });
    } else {
      gsap.to(`.circle-${name}`, {
        scale: 0,
        ease: "power4.inOut",
        duration: 1,
      });
      gsap.to(`.member-links-${name}`, {
        scale: 0,
        ease: "power4.inOut",
        duration: 1,
        opacity: 0,
      });
      gsap.to(`.arrow-team-${name}`, {
        ease: "power4.inOut",
        duration: 1,
        rotate: "-45deg",
      });
    }
  }, [isSpread, name]);

  return (
    <>
      <div className="team-card h-[53vh] w-[22vw]  bg--400 flex flex-col justify-center items-center rounded-[20px] relative  overflow-hidden max-lg:w-[60vw] max-lg:h-[40vh] ">
        <img
          src={image}
          alt="IMAGE"
          className="h-full w-full object-cover rounded-[20px]  absolute top-0 left-0 z-[1000] text-white"
        />
        <div
          className={`member-links member-links-${name} h-[70%] w-[100%] bg--500 flex flex-col justify-end items-center scale-0 absolute top-0 left-0 z-[6000] opacity-0`}
        >
          {/* <link>Linkedin</link> */}
          <Link
            to={github}
            className="h-[8vh] w-full bg--500 flex justify-center items-center gap-[1vw] overflow-hidden"
          >
            {" "}
            <FiGithub size={25} /> <h2 className="text-[1.1vw]">GITHUB</h2>
          </Link>
          <a
            href={`mailto:${gmail}`}
            className="h-[8vh] w-full bg--900 flex justify-center items-center gap-[1vw] overflow-hidden"
          >
            <SiGmail size={25} />
            <h2 className="text-[1.1vw]">GMAIL</h2>
          </a>
          <Link
            to={linkedin}
            className="h-[8vh] w-full bg--800 flex justify-center items-center gap-[1vw] overflow-hidden"
          >
            <FaLinkedinIn size={25} />
            <h2 className="text-[1.1vw]">LINKEDIN</h2>
          </Link>
        </div>
        <div className="team-info h-[100%] w-[100%] bg-transparent absolute top-0 left-0 flex justify-center items-end rounded-[20px] opacity-[100%] z-[2000] ">
          <div className="team-bottom h-[16vh] w-[100%] bg--500 flex justify-center items-center">
            <div className="team-left h-[100%] w-[65%] bg--500 flex flex-col justify-center items-start px-[1.5vw]">
              <h1 className="text-white text-[6vh] leading-[8vh] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">{name}</h1>
              <p className="text-white text-[1.8vh] bg--500">{role}</p>
            </div>
            <div className="team-right h-[100%] w-[35%] bg--500 flex justify-center items-center relative">
              <button
                onClick={onButtonClick}
                className="bg-white rounded-full h-[8vh] w-[8vh] flex  justify-center items-center z-[1000] absolute"
              >
                <FaArrowRight
                  size="5vw"
                  className={`arrow-team arrow-team-${name} rotate-[-45deg] absolute z-[2000] h-[2vh] w-[2vh]`}
                />
              </button>

              <div
                className={`circle circle-${name} bg-white rounded-full h-[8vh] w-[8vh] flex justify-center items-center absolute z-[100]`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCards;
