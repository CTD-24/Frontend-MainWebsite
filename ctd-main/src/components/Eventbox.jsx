import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showEvent } from "../redux/slices/eventSlice.js";
import gsap from 'gsap';
import { useEffect, useState } from "react";

const Eventbox = ({ id, name, description, rules, height, width, color, image, date, mobileHeight, mobileWidth }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const eventName = name;

  const toPage = () => {
    navigate(`/eventDesc/${eventName}`);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        height: isMobile ? mobileHeight : height,
        width: isMobile ? mobileWidth : width,
        // backgroundColor: color,
      }}
      className="eventbox flex flex-col justify-center items-center border-[#ccd7ff35] border-[1px] backdrop-blur-[20px] rounded-[2vh] shadow-lg p-[2vw] 
      hover:scale-[1.05] hover:ease-linear duration-[2000] hover:transition-all cursor-pointer hover:border-[#49fff6b6] hover:border-[2px] "
      onClick={() => {
        dispatch(
          showEvent({
            name: name,
            description: description,
            rule: rules,
            colors: color,
            date: date,
          })
        );
        setTimeout(() => {
          toPage();
        }, 100);
      }}
    >
      {/* Image Section */}
      {image && (
        <img
          src={image}
          alt={name}
          className="h-24 w-24 rounded-t-lg object-cover bg--400"
        />
      )}

      {/* Event Name and Description */}
      <div className="text-white flex flex-col justify-center items-center text-center ">
        <h1 className="text-[3vw] max-md:text-[3vh] font-bold">{name}</h1>
        {/* <p className="text-[1vw] hidden">{description}</p> */}
      </div>
    </div>
  );
};

export default Eventbox;
