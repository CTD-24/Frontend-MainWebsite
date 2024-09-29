import Eventbox from "../components/Eventbox";
import rc from "../assets/rc.png";
import Enigma from "../assets/Enigma.png";
import nth from "../assets/nth.png";

const EventsPage = () => {
  const eventsData = [
    {
      id:1,
      name: "NCC",
      description: "The annual intra-college Tech-Fest",
      height: "35vh",
      width: "28vw",
      color: "#8B295E", 
      image: rc,
    },
    {
      id:2,
      name: "RC",
      description: "Battle of the best coders",
      height: "35vh",
      width: "28vw",
      color: "#4B178B", 
      image: rc,
    },
    {
      id:3,
      name: "NTH",
      description: "Tech quiz for knowledge enthusiasts",
      height: "35vh",
      width: "28vw",
      color: "#741F8B",
      image: nth,
    },
    {
      id:4,
      name: "ENIGMA",
      description: "Quiz for knowledge enthusiasts",
      height: "35vh",
      width: "43vw",
      color: "#2B1075", 
      image: Enigma,
    },
    {
      id:5,
      name: "DECODE RUSH",
      description: "The annual intra-college Tech-Fest",
      height: "35vh",
      width: "43vw",
      color: "#529DA0", 
      image: rc,
    },
  ];

  return (
    <>
      <div>
        <div className="Container bg--500 min-h-[105vh] flex flex-col justify-center items-center w-full">
          <div className="head w-full h-[20%] bg--400 flex flex-col justify-center items-start px-[4vw] text-white">
            <h1 className="text-[6vw] bg--500 h-[16vh] flex justify-center items-center">
              EVENTS
            </h1>
          </div>
          <div className="maincontent w-full h-[80%] bg--500 flex flex-col justify-start items-center flex-wrap gap-[2vw] px-[4vw]">
            <div className="flex flex-row gap-8">
              {eventsData.slice(0, 3).map((event, index) => (
                <Eventbox
                  key={index}
                  id={event.id}
                  name={event.name}
                  description={event.description}
                  height={event.height}
                  width={event.width}
                  color={event.color}
                  image={event.image}
                />
              ))}
            </div>
            <div className="flex flex-row gap-8">
              {eventsData.slice(3).map((event, index) => (
                <Eventbox
                  key={index}
                  id={event.id}
                  name={event.name}
                  description={event.description}
                  height={event.height}
                  width={event.width}
                  color={event.color}
                  image={event.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
