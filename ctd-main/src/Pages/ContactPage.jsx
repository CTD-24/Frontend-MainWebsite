import { useEffect, useState } from "react";
import TeamCards from "../components/TeamCards";
import team1 from "./TeamAssets/team1.png";
import team2 from "./TeamAssets/team2.png";
import shreyas from "./TeamAssets/Shreyas.jpg";
import gitesh from "./TeamAssets/gitesh.jpg";
import anshul from "./TeamAssets/anshul.jpeg";
import gsap from "gsap";

const ContactPage = () => {

    const teamArr = [
        {
            id:1,
            name: "Shreyas",
            role:".",
            image: shreyas,
            github:"username.github.com",
            gmail:"username.github.com",
            linkedin:"username.github.com",
        },
        {
            id:2,
            name: "Anshul",
            role:".",
            image: anshul,
            github:"username.github.com",
            gmail:"username.github.com",
            linkedin:"username.github.com",


        },
        {
            id:3,
            name: "Gitesh",
            role:".",
            image: gitesh,
            github:"username.github.com",
            gmail:"username.github.com",
            linkedin:"username.github.com",

        },
    ];
    console.log(teamArr.length);

    const [spreadStates, setSpreadStates] = useState(Array(teamArr.length).fill(false));

    const handleButtonClick = (index) => {
        setSpreadStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };


    return ( 
        <>
        <div className="team-cont min-h-[100vh] w-[100vw] bg-[#181818] flex flex-col justify-start items-center ">


            <div className="events-head min-h-[100vh] w-[100vw] bg--600 flex flex-col justify-center max-lg:gap-[2vh]  items-center gap-[3vh]   ">
                <div className="row-1 h-auto w-[100vw] bg--500 flex justify-around items-center max-lg:gap-[2vh] max-lg:flex-col">
                    {
                        teamArr.slice(0,3).map((team, index) => {
                            return(
                                <>
                                    <TeamCards
                                        key={team.id}
                                        name={team.name}
                                        role={team.role}
                                        image={team.image}
                                        github={team.github}
                                        gmail={team.gmail}
                                        linkedin={team.linkedin}
                                        isSpread={spreadStates[index]}
                                        onButtonClick={() => handleButtonClick(index)}
                        />
                                </>
                            );
                        })
                    }
                </div>
                <div className="row-2 h-auto w-[100vw] max-lg:flex-col max-lg:gap-[2vh] bg--500 flex justify-around items-center">
                    {
                        teamArr.slice(3,6).map((team, index) => {
                            return(
                                <>
                                     <TeamCards
                                    key={team.id}
                                    name={team.name}
                                    role={team.role}
                                    image={team.image}
                                    github={team.github}
                                    gmail={team.gmail}
                                    linkedin={team.linkedin}
                                    isSpread={spreadStates[index + 3]}
                                    onButtonClick={() => handleButtonClick(index + 3)}
                        />
                                </>
                            );
                        })
                    }
                </div>
                
            </div>
        </div>
        </>
     );
}
 
export default ContactPage;