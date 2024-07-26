
import { FaArrowRight } from "react-icons/fa6";

const TeamCards = ({name, role}) => {
    return ( 
        <>
            <div className="team-card h-[53vh] w-[22vw] bg--400 flex flex-col justify-center items-center rounded-[2vh]">
                <img src="" alt="" />
                <div className="team-info h-[100%] w-[100%] bg-black flex justify-center items-end rounded-[2vh]">
                    <div className="team-bottom h-[16vh] w-[100%] bg--500 flex justify-center items-center">
                        <div className="team-left h-[100%] w-[60%] bg--500 flex flex-col justify-center items-start px-[2vw]">
                            <h1 className="text-white text-[6vh] leading-[8vh]">{name}</h1>
                            <p className="text-white text-[1.8vh]">{role}</p>
                        </div>
                        <div className="team-right h-[100%] w-[40%] bg--500 flex  justify-center items-center">
                            <button className="bg-white rounded-full h-[10vh] w-[10vh] flex  justify-center items-center"><FaArrowRight className="z-[3000]" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default TeamCards;