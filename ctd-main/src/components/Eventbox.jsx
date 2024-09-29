import { useNavigate } from "react-router-dom";

const Eventbox = ({ id,name, description, height, width, color, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event/${name}`);
  };

  return (
    <div
      className="eventbox flex flex-col justify-center items-center rounded-lg shadow-lg p-[2vw] cursor-pointer"
      style={{ height, width, backgroundColor: color }}
      onClick={handleClick}
    >
      {/* Image Section */}
      {image && (
        <img
          src={image}
          alt={name}
          className="w-full h-[60%] rounded-t-lg object-cover"
        />
      )}
      
      {/* Event Name and Description */}
      <div className="text-white flex flex-col justify-center items-center text-center mt-4">
        <h1 className="text-[2vw] font-bold">{name}</h1>
        <p className="text-[1.2vw] mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Eventbox;
