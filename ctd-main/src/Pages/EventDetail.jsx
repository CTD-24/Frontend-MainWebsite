import { useParams } from "react-router-dom";
import { useState } from "react";

const EventDetail = () => {
  const { name } = useParams();
  const [activeTab, setActiveTab] = useState("Details");

  // Define different details, rules, and contact info for each event
  const eventData = {
    event1: {
      details: `${name} is an event where you can test your skills and compete with others in a variety of challenges.`,
      rules: "Follow the rules carefully. No cheating, and respect other participants.",
      contact: "For any queries, contact us at event1@example.com.",
    },
    event2: {
      details: `${name} brings together enthusiasts from around the world to showcase their talents.`,
      rules: "Participants must submit entries on time and adhere to event guidelines.",
      contact: "Contact: event2help@example.com for further information.",
    },
  };

  // Fallback content for events not defined
  const defaultEvent = {
    details: `${name} is an exciting event filled with challenges.`,
    rules: "Please follow all event guidelines strictly.",
    contact: "For more information, reach out at info@example.com.",
  };

  const currentEvent = eventData[name] || defaultEvent;

  return (
    <>
      <div className="Container bg-black min-h-[110vh] flex flex-col justify-center items-center w-full">
        <div className="head w-[90%] h-[25%] bg-pink-600 flex justify-center items-center rounded-[2vw] px-[0.8vw] text-white">
          <h1 className="text-[6vw] w-[95%] ml-[1vw] h-[20vh] flex justify-between items-center rounded-[2vw]">
            {name}
          </h1>
          <div className="bg-white text-pink-600 rounded-[1.5vw] leading-10 h-[17vh] w-[9vw] flex flex-col justify-center items-center">
            <h1 className="text-[4vw]">16</h1>
            <h1 className="text-[2vw]">OCTOBER</h1>
          </div>
        </div>
        <div className="gap-[4vw] flex justify-center items-start w-full px-[4vw] py-[2vh]">
          <div className="content flex flex-col w-[60%]">
            <div className="mininav h-[10vh] flex gap-[2vw] justify-start items-center">
              <button
                className={`bg-[#333333] text-white px-[2vw] py-[1vh] rounded-full ${activeTab === "Details" ? "bg-white text-black" : ""}`}
                onClick={() => setActiveTab("Details")}
              >
                Details
              </button>
              <button
                className={`bg-[#333333] text-white px-[2vw] py-[1vh] rounded-full ${activeTab === "Rules" ? "bg-white text-black" : ""}`}
                onClick={() => setActiveTab("Rules")}
              >
                RULES
              </button>
              <button
                className={`bg-[#333333] text-white px-[2vw] py-[1vh] rounded-full ${activeTab === "Contact" ? "bg-white text-black" : ""}`}
                onClick={() => setActiveTab("Contact")}
              >
                Contact
              </button>
            </div>
            <div className="eachcontent h-[40vh] flex flex-col justify-center items-start gap-[2vh]">
              {activeTab === "Details" && (
                <div className="eventItem bg-[#333333] text-white px-[2vw] py-[1.5vh] gap-2 rounded-lg flex justify-between items-center">
                  <p className="text-[1.1vw]">{currentEvent.details}</p>
                </div>
              )}
              {activeTab === "Rules" && (
                <div className="eventItem bg-[#333333] text-white px-[2vw] py-[1.5vh] gap-2 rounded-lg flex justify-between items-center">
                  <p className="text-[1.1vw]">{currentEvent.rules}</p>
                </div>
              )}
              {activeTab === "Contact" && (
                <div className="eventItem bg-[#333333] text-white px-[2vw] py-[1.5vh] gap-2 rounded-lg flex justify-between items-center">
                  <p className="text-[1.1vw]">{currentEvent.contact}</p>
                </div>
              )}
            </div>
          </div>
          <div className="prizepool bg-[#333333] text-white w-[30%] h-[55vh] rounded-2xl p-[2vw] flex flex-col justify-between items-center">
            <h1 className="text-[3vw]">PRIZE POOL</h1>
            <div className="flex flex-col gap-[1.5vh] text-[1.5vw] w-full">
              <div className="flex justify-between w-full">
                <h2>WINNER</h2>
                <h2>3000 $</h2>
              </div>
              <div className="flex justify-between w-full">
                <h2>RUNNER UP</h2>
                <h2>1500 $</h2>
              </div>
            </div>
            <button className="bg-white text-black px-[4vw] py-[1.5vh] rounded-full text-[1.5vw]">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetail;
