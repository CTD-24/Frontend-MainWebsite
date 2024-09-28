// import EventCard from "../components/EventCard";

// const EventsPage = () => {
//     const eventsData = [
//         { name: "NCC", description: "The annual intra-college Tech-Fest" },
//         { name: "RC", description: "Battle of the best coders" },
//         { name: "ENIGMA", description: "Quiz for knowledge enthusiasts" },
//         { name: "DECODE RUSH", description: "The annual intra-college Tech-Fest" },
//         { name: "NTH", description: "Tech quiz for knowledge enthusiasts" }
//     ];

//     return (
//         <>
//             <div className="Container bg--500 min-h-[100%] flex flex-col justify-center items-center w-full">
//                 <div className="head w-full h-[20%] bg--400 flex flex-col justify-center items-start px-[4vw] text-white">
//                     <h1 className="text-[8vw] bg--500 h-[16vh] flex justify-center items-center ">EVENTS</h1>
//                 </div>
//                 <div className="maincontent w-full h-[80%] bg--500 flex justify-start items-center flex-wrap gap-[4vw] px-[4vw]">
//                     {eventsData.map((event, index) => (
//                         <EventCard key={index} name={event.name} description={event.description} />
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default EventsPage;
import Eventbox from "../components/Eventbox";

const EventsPage = () => {
  const eventsData = [
    {
      name: "NCC",
      description: "The annual intra-college Tech-Fest",
      height: "35vh",
      width: "28vw",
      color: "rgba(112, 41, 140, 0.5)", 
      bordercolor: "rgb(112, 41, 140)"
    },
    {
      name: "RC",
      description: "Battle of the best coders",
      height: "35vh",
      width: "28vw",
      color: "rgba(80, 136, 140, 0.5)", 
      bordercolor: "rgb(80, 136, 140)", 
    },
    {
      name: "NTH",
      description: "Tech quiz for knowledge enthusiasts",
      height: "35vh",
      width: "28vw",
      color: "rgba(124, 46, 89, 0.5)",
      bordercolor: "rgb(124, 46, 89)", 
    },
    {
      name: "ENIGMA",
      description: "Quiz for knowledge enthusiasts",
      height: "35vh",
      width: "43vw",
      color: "rgba(136, 49, 81, 0.5)", 
      bordercolor: "rgb(136, 49, 81)", 
    },
    {
      name: "DECODE RUSH",
      description: "The annual intra-college Tech-Fest",
      height: "35vh",
      width: "43vw",
      color: "rgba(51, 31, 139, 0.5)", 
      bordercolor: "rgb(51, 31, 139)", 
    },
  ];

  return (
    <>
      <div>
        <div className="Container bg--500 min-h-[100%] flex flex-col justify-center items-center w-full">
          <div className="head w-full h-[20%] bg--400 flex flex-col justify-center items-start px-[4vw] text-white">
            <h1 className="text-[8vw] bg--500 h-[16vh] flex justify-center items-center">
              EVENTS
            </h1>
          </div>
          <div className="maincontent w-full h-[80%] bg--500 flex flex-col justify-start items-center flex-wrap gap-[2vw] px-[4vw]">
            <div className="flex flex-row gap-8">
              {eventsData.slice(0, 3).map((event, index) => (
                <Eventbox
                  key={index}
                  name={event.name}
                  description={event.description}
                  height={event.height}
                  width={event.width}
                  color={event.color}
                  bordercolor={event.bordercolor}
                />
              ))}
            </div>
            <div className="flex flex-row gap-8">
              {eventsData.slice(3).map((event, index) => (
                <Eventbox
                  key={index}
                  name={event.name}
                  description={event.description}
                  height={event.height}
                  width={event.width}
                  color={event.color}
                  bordercolor={event.bordercolor}
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
