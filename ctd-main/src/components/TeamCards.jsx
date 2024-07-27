
import { FaArrowRight } from "react-icons/fa6";

const TeamCards = ({name, role, image}) => {
    return ( 
        <>
            <div className="team-card h-[53vh] w-[20vw] bg--400 flex flex-col justify-center items-center rounded-[20px] relative">
                <img src={image} alt="IMAGE" className="h-full w-full object-cover rounded-[20px]  absolute top-0 left-0 z-[1000] text-white" />
                <div className="team-info h-[100%] w-[100%] bg-transparent absolute top-0 left-0 flex justify-center items-end rounded-[20px] opacity-[100%] z-[10000] ">
                    <div className="team-bottom h-[16vh] w-[100%] bg--500 flex justify-center items-center">
                        <div className="team-left h-[100%] w-[60%] bg--500 flex flex-col justify-center items-start px-[1.5vw]">
                            <h1 className="text-white text-[6vh] leading-[8vh]">{name}</h1>
                            <p className="text-white text-[2vh] bg--500">{role}</p>
                        </div>
                        <div className="team-right h-[100%] w-[40%] bg--500 flex  justify-center items-center">
                            <button className="bg-white rounded-full h-[10vh] w-[10vh] flex  justify-center items-center"><FaArrowRight className="z-[2000] rotate-[-45deg] " /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default TeamCards;