import { useEffect, useState } from "react";
import TeamCards from "../components/TeamCards";
import team1 from "./TeamAssets/team1.png";
// import team2 from "./TeamAssets/team2.png";
// import team3 from "./TeamAssets/team3.png";
import neel from "./TeamAssets/neel.jpg";
import palak from "./TeamAssets/palak.jpg";
import divya from "./TeamAssets/divya.jpeg";
import avadhut from "./TeamAssets/avadhut.jpeg";
import aniket from "./TeamAssets/aniket.jpeg";
import sujal from "./TeamAssets/sujal.jpg";
import sameer from "./TeamAssets/sameer.jpeg";
import shrinidhi from "./TeamAssets/shrinidhi.jpeg";
import atharv from "./TeamAssets/atharv.jpeg";
import digambar from "./TeamAssets/digmabar.jpg";
import nik from './TeamAssets/nik.jpg'
import shounak from './TeamAssets/shounak.jpg'


import gsap from "gsap";

const TeamPage = () => {

    const teamArr = [
        {
            id:1,
            name: "NEEL",
            role:"Designer/Frontend Developer",
            image: neel,
            github:"https://github.com/blueinabaux",
            gmail:"satdiveneel3004@gmail.com",
            linkedin:"https://www.linkedin.com/in/neel-satdive-6335n/",
        },
        {
            id:2,
            name: "SUJAL",
            role:"Backend Developer",
            image: sujal,
            github:"https://github.com/bhorsujal",
            gmail:"bhorsujal@gmail.com",
            linkedin:"https://linkedin.com/in/sujal-bhor",


        },
        {
            id:3,
            name: "PALAK",
            role:"Frontend Developer",
            image: palak,
            github:"https://github.com/PalakAgrawal04",
            gmail:"palaka2805@gmail.com",
            linkedin:"https://www.linkedin.com/in/palak-agrawal-a19b3b281/",

        },
        {
            id:4,
            name: "DIGAMBAR",
            role:"Full Stack Developer",
            image: digambar,
            github:"https://github.com/digambarJail",
            gmail:"ddjail2004@gmail.com",
            linkedin:"https://www.linkedin.com/in/digambarjail/",
        },
        {
            id:5,
            name: "DIVYA",
            role:"Frontend Developer",
            image: divya,
            github:"https://github.com/DivyaaPardeshi",
            gmail:"divya.nsk22@gmail.com",
            linkedin:"https://www.linkedin.com/in/divya-pardeshi-521154296",
            
        },
        {
            id:6,
            name: "SHOUNAK",
            role:"Frontend Developer",
            image: shounak,
            github:"https://github.com/ShounakM04",
            gmail:"shounakmulay04@gmail.com",
            linkedin:"https://www.linkedin.com/in/shounakmulay26/",

        },
        {
            id:7,
            name: "AVADHUT",
            role:"Backend Developer",
            image: avadhut,
            github:"https://github.com/avadhutgiri",
            gmail:"avadg252@gmail.com",
            linkedin:"https://www.linkedin.com/in/Avadhutgiri/",

        },
        {
            id:8,
            name: "ATHARV",
            role:"Backend Developer",
            image: atharv,
            github:"https://github.com/atharvfakatkar",
            gmail:"atharvfakatkar56@gmail.com",
            linkedin:"https://www.linkedin.com/in/atharvfakatkar",

        },
        {
            id:9,
            name: "ANIKET",
            role:"Backend Developer",
            image: aniket,
            github:"https://github.com/aniketk17",
            gmail:"aniketkardile243@gmail.com",
            linkedin:"https://www.linkedin.com/in/aniket-kardile/",

        },
        {
            id:10,
            name: "NIKUNJ",
            role:"Frontend Developer",
            image: nik,
            github:"https://github.com/nk112233",
            gmail:"nikunjkadu19@gmail.com",
            linkedin:"https://www.linkedin.com/in/nikunj-kadu-45a3b7292/",

        },
        {
            id:11,
            name: "SHRINIDHI",
            role:"NTH/Decode Rush",
            image: shrinidhi,
            github:"https://github.com/shrinidhib",
            gmail:"b.shrinidhi1214@gmail.com",
            linkedin:"https://www.linkedin.com/in/b-shrinidhi/",

        },
        {
            id:12,
            name: "SAMIR",
            role:"NTH/Decode Rush",
            image: sameer,
            github:"https://github.com/Samir-Wankhede",
            gmail:"samirsw04@gmail.com",
            linkedin:"https://www.linkedin.com/in/samir-wankhede/",

        },
    ];
    // console.log(teamArr.length);

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


            <div className="events-head h-[35vh] w-[100vw] bg--600 flex justify-start items-end px-[5vw] max-lg:py-[2vh] max-lg:h-[22vh]   ">
                <h1 className="text-white text-[6vw] max-lg:text-[6vh]">OUR TEAM</h1>
            </div>

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
                <div className="row-3 h-auto w-[100vw] max-lg:flex-col max-lg:gap-[2vh] bg--500 flex justify-around items-center">
                    {
                        teamArr.slice(6,9).map((team, index) => {
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
                                    isSpread={spreadStates[index + 6]}
                                    onButtonClick={() => handleButtonClick(index + 6)}
                        />
                                </>
                            );
                        })
                    }
                </div>
                <div className="row-4 h-auto w-[100vw] max-lg:flex-col max-lg:gap-[2vh] bg--500 flex justify-around items-center">
                    {
                        teamArr.slice(9,12).map((team, index) => {
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
                                    isSpread={spreadStates[index + 9]}
                                    onButtonClick={() => handleButtonClick(index + 9)}
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
