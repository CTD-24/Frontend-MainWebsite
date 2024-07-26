import TeamCards from "../components/TeamCards";
const TeamPage = () => {

    const teamArr = [
        {
            id:1,
            name: "SYKUNNO",
            role:"Backend Developer"
        },
        {
            id:2,
            name: "NEEL",
            role:"Frontend Developer"
        },
        {
            id:3,
            name: "MILI",
            role:"Designer"
        },
    ]
    return ( 
        <>
        <div className="team-cont min-h-[100vh] w-[100vw] bg-[#181818] flex flex-col justify-start items-center ">
            <div className="events-head h-[30vh] w-[100vw] bg--600 flex justify-start items-center px-[2vw] ">
                <h1 className="text-white text-[6vw]">OUR TEAM</h1>
            </div>

            <div className="events-head h-[100vh] w-[100vw] bg--600 flex flex-wrap justify-around items-start py-[10vh]  ">
                {
                    teamArr.map((team) => {
                        return(
                            <>
                                <TeamCards key={team.id} name={team.name} role={team.role} />
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