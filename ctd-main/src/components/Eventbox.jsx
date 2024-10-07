import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showEvent } from "../redux/slices/eventSlice.js";
import gsap from 'gsap';
import { useEffect, useState } from "react";

const Eventbox = ({ id, name, description, rules, height, width, color, image, date, mobileHeight, mobileWidth }) => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Check screen size on mount and update the `isMobile` state accordingly
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    handleResize();
    // Add event listener to handle window resizing
    window.addEventListener('resize', handleResize);
    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toPage = () => {
    navigate('/eventDesc');
  };

  return (
    <div
      // Apply different styles based on screen size
      style={{
        height: isMobile ? mobileHeight : height,
        width: isMobile ? mobileWidth : width,
        backgroundColor: color,
      }}
      className="eventbox flex flex-col justify-center items-center bg-[#ccd7ff35] backdrop-blur-[20px] rounded-[2vh] shadow-lg p-[2vw] 
      hover:scale-[1.05] hover:ease-linear duration-[2000] hover:transition-all cursor-pointer hover:bg-[#ccd7ff72]"
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
          className="w-full h-[70%] rounded-t-lg object-cover"
        />
      )}

      {/* Event Name and Description */}
      <div className="text-white flex flex-col justify-center items-center text-center ">
        <h1 className="text-[3vw] font-bold">{name}</h1>
        <p className="text-[1vw] hidden">{description}</p>
      </div>
    </div>
  );
};

export default Eventbox;
