import TeamCards from "../components/TeamCards";
import team1 from "./TeamAssets/team1.png";
import team2 from "./TeamAssets/team2.png";
import team3 from "./TeamAssets/team3.png";
const TeamPage = () => {

    const teamArr = [
        {
            id:1,
            name: "SYKUNNO",
            role:"Backend Developer",
            image: team1
        },
        {
            id:2,
            name: "NEEL",
            role:"Frontend Developer",
            image: team2

        },
        {
            id:3,
            name: "MILI",
            role:"Designer",
            image: team3

        },
        {
            id:4,
            name: "SYKUNNO",
            role:"Backend Developer",
            image: team1
        },
        {
            id:5,
            name: "NEEL",
            role:"Frontend Developer",
            image: team2

        },
        {
            id:6,
            name: "MILI",
            role:"Designer",
            image: team3

        },
    ]
    return ( 
        <>
        <div className="team-cont min-h-[100vh] w-[100vw] bg-[#181818] flex flex-col justify-start items-center ">
            <div className="events-head h-[30vh] w-[100vw] bg--600 flex justify-start items-end px-[5vw]  ">
                <h1 className="text-white text-[6vw]">OUR TEAM</h1>
            </div>

            <div className="events-head h-[100vh] w-[100vw] bg--600 flex flex-wrap justify-center items-start py-[10vh]  ">
                {
                    teamArr.map((team) => {
                        return(
                            <>
                                <TeamCards key={team.id} name={team.name} role={team.role} image={team.image} />
                            </>
                        );
                    })
                }
            </div>
        </div>
        </>
     );
}
 
export default TeamPage;