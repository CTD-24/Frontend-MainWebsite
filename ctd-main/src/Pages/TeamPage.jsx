import { useEffect, useState } from "react";
import TeamCards from "../components/TeamCards";
import team1 from "./TeamAssets/team1.png";
import team2 from "./TeamAssets/team2.png";
import team3 from "./TeamAssets/team3.png";
import gsap from "gsap";

const TeamPage = () => {

    const teamArr = [
        {
            id:1,
            name: "SYKUNNO",
            role:"Backend Developer",
            image: team1,
            github:"username.github.com",
            gmail:"username.github.com",
            linkedin:"username.github.com",
        },
        {
            id:2,
            name: "NEEL",
            role:"Frontend Developer",
            image: team2,
            github:"username.github.com",
            gmail:"username.github.com",
            linkedin:"username.github.com",


        },
        {
            id:3,
            name: "PALAK",
            role:"Designer",
            image: team3,
            github:"username.github.com",
            gmail:"username.github.com",
            linkedin:"username.github.com",

        },
        {
            id:4,
            name: "DIGAMBAR",
            role:"Backend Developer",
            image: team1,
            github:"username.github.com",
            gmail:"username.github.com",
            linkedin:"username.github.com",
        },
        {
            id:5,
            name: "RYAN",
            role:"Frontend Developer",
            image: team2,
            github:"username.github.com",
            gmail:"username.github.com",
            linkedin:"username.github.com",
            

        },
        {
            id:6,
            name: "POSIDON",
            role:"Designer",
            image: team3,
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
            <div className="events-head h-[35vh] w-[100vw] bg--600 flex justify-start items-end px-[5vw]  ">
                <h1 className="text-white text-[6vw]">OUR TEAM</h1>
            </div>

            <div className="events-head min-h-[100vh] w-[100vw] bg--600 flex flex-col justify-center  items-center   ">
                <div className="row-1 h-[70vh] w-[100vw] bg--500 flex justify-around items-center">
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
                <div className="row-2 h-[70vh] w-[100vw] bg--500 flex justify-around items-center">
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
 
export default TeamPage;