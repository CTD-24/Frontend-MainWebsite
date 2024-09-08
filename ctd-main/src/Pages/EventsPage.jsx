import EventCard from "../components/EventCard";

const EventsPage = () => {
    return ( 
        <>
            <div className="Container bg--500 h-full w-full">
                <div className="head w-full h-[20%] bg--400 flex flex-col justify-center items-start px-[4vw]  text-white ">
                    <h1 className="text-[8vw] bg--500 h-[16vh] flex justify-center items-center ">EVENTS</h1>
                </div>
                <div className="maincontent w-full h-[80%] bg--500 flex justify-start items-center px-[4vw]">
                        <EventCard/>
                </div>
            </div>
        </>
     );
}
 
export default EventsPage;