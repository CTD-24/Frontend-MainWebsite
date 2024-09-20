import EventCard from "../components/EventCard";

const EventsPage = () => {
    const eventsData = [
        { name: "NCC", description: "The annual intra-college Tech-Fest" },
        { name: "RC", description: "Battle of the best coders" },
        { name: "ENIGMA", description: "Quiz for knowledge enthusiasts" },
        { name: "DECODE RUSH", description: "The annual intra-college Tech-Fest" },
        { name: "NTH", description: "Tech quiz for knowledge enthusiasts" }
    ];

    return (
        <>
            <div className="Container bg--500 min-h-[100%] flex flex-col justify-center items-center w-full">
                <div className="head w-full h-[20%] bg--400 flex flex-col justify-center items-start px-[4vw] text-white">
                    <h1 className="text-[8vw] bg--500 h-[16vh] flex justify-center items-center ">EVENTS</h1>
                </div>
                <div className="maincontent w-full h-[80%] bg--500 flex justify-start items-center flex-wrap gap-[4vw] px-[4vw]">
                    {eventsData.map((event, index) => (
                        <EventCard key={index} name={event.name} description={event.description} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default EventsPage;
