import { useEffect, useState } from "react";
import TeamCards from "../components/TeamCards";
import team1 from "./TeamAssets/team1.png";
import team2 from "./TeamAssets/team2.png";
import shreyas from "./TeamAssets/Shreyas.jpg";
import gitesh from "./TeamAssets/gitesh.jpg";
import anshul from "./TeamAssets/anshul.jpeg";
import gsap from "gsap";
import ContactCards from "../components/ContactCards";

const ContactPage = () => {
  const teamArr = [
    {
      id: 1,
      name: "SHREYAS",
      role: "Core Team",
      image: shreyas,
      phone: "+91 7666521232",
      gmail: "gitpats@gmail.com",
      linkedin: "http://www.linkedin.com/in/giteshapatil",
    },
    {
      id: 2,
      name: "ANSHUL",
      role: "Core Team",
      image: anshul,
      phone: "+91 8999813108",
      gmail: "username.github.com",
      linkedin: "username.github.com",
    },
    {
      id: 3,
      name: "GITESH",
      role: "Core Team",
      image: gitesh,
      phone: "+91 8999813108",
      gmail: "username.github.com",
      linkedin: "username.github.com",
    },
  ];

  const [spreadStates, setSpreadStates] = useState(
    Array(teamArr.length).fill(false)
  );

  const handleButtonClick = (index) => {
    setSpreadStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <>
      <div className="team-cont min-h-[100vh] w-[100vw] bg-[#181818] flex flex-col justify-start items-center ">
        <div className="events-head h-[35vh] w-[100vw] bg--600 flex justify-start  max-lg:justify-center items-end px-[5vw] max-lg:py-[2vh] max-lg:h-[22vh]   ">
          <h1 className="text-white text-[6vw] max-lg:text-[6vh]">
            CONTACT US
          </h1>
        </div>

        <div className="events-head min-h-[70vh] w-[100vw] bg--600 flex flex-col justify-center max-lg:gap-[2vh]   items-center gap-[3vh]   ">
          <div className="row-1 h-auto w-[100vw] bg--500 flex justify-around items-center max-lg:gap-[2vh] max-lg:flex-col">
            {teamArr.slice(0, 3).map((team, index) => {
              return (
                <>
                  <ContactCards
                    key={team.id}
                    name={team.name}
                    role={team.role}
                    image={team.image}
                    gmail={team.gmail}
                    phone={team.phone}
                    linkedin={team.linkedin}
                    isSpread={spreadStates[index]}
                    onButtonClick={() => handleButtonClick(index)}
                  />
                </>
              );
            })}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ContactPage;
