import Eventbox from "../components/Eventbox";
import rc from "../assets/rc.png";
import Enigma from "../assets/Enigma.png";
import nth from "../assets/nth.png";

const EventsPage = () => {
  const eventsData = [
    {
      id: 1,
      name: "NCC",
      description: [
        "The best algorithm is ten steps ahead of the second-best. So are you good enough to code the best one?",
        "The National Computing Competition lets you test your coding skills with other coders.",
        "Sign Up to compete for the 'Overlord Coder' title and get a chance to experience a real-world coding competition!",
      ],
      rules: [
        {
          ruleNo: 1,
          ruleDesc: "Contest will contain 5-6 problems that need to be coded in Python, C++, or C.",
        },
        {
          ruleNo: 2,
          ruleDesc: "It will be individual competition hence teaming up is strictly restricted.",
        },
        {
          ruleNo: 3,
          ruleDesc: "For the first correct submission of a question, you will receive the points currently available on that question.",
        },
        {
          ruleNo: 4,
          ruleDesc:
            "For each wrong submission before the correct submission, 10 points will be deducted. If the question was already solved before, no points will be deducted for that question.",
        },
        {
          ruleNo: 5,
          ruleDesc: "Plagiarism checks would be done after the contest.",
        },
      ],
      height: "32vh",
        width: "25vw",
        color: "#E75480", 
        date: "17",
        image: rc,
    },

    {
      id: 2,
      name: "RC",
      description:
        ["Reverse Coding is a coding competition to analyze your problem-solving ability with programming knowledge along with mathematical skills. Test your ability to decode the pattern through a decipher and code round in any of the languages - C, C++, Java, and Python."],
      rules: [],
      height: "32vh",
      width: "25vw",
      color: "#4B178B",
      date: "17",

      image: rc,
    },
    {
      id: 3,
      name: "NTH",
      description: ["Tech quiz for knowledge enthusiasts"],
      rules: [
        {
          ruleNo: 1,
          ruleDesc: "Contest will contain 5-6 problems that need to be coded in Python, C++, or C."
        },
        {
          ruleNo: 2,
          ruleDesc: "It will be individual competition hence teaming up is strictly restricted."
        },
        {
          ruleNo: 3,
          ruleDesc: "For the first correct submission of a question, you will receive the points currently available on that question."
        },
        {
          ruleNo: 4,
          ruleDesc: "For each wrong submission before the correct submission, 10 points will be deducted. If the question was already solved before, no points will be deducted for that question."
        },
        {
          ruleNo: 5,
          ruleDesc: "Plagiarism checks would be done after the contest."
        }
      ],
      height: "32vh",
      width: "25vw",
      color: "#741F8B",
      date: "17",

      image: nth,
    },
    {
      id: 4,
      name: "Enigma",
      description: ["Quiz for knowledge enthusiasts"],
      rules: [
        {
          ruleNo: 1,
          ruleDesc: "Contest will contain 5-6 problems that need to be coded in Python, C++, or C."
        },
        {
          ruleNo: 2,
          ruleDesc: "It will be individual competition hence teaming up is strictly restricted."
        },
        {
          ruleNo: 3,
          ruleDesc: "For the first correct submission of a question, you will receive the points currently available on that question."
        },
        {
          ruleNo: 4,
          ruleDesc: "For each wrong submission before the correct submission, 10 points will be deducted. If the question was already solved before, no points will be deducted for that question."
        },
        {
          ruleNo: 5,
          ruleDesc: "Plagiarism checks would be done after the contest."
        }
      ],
      height: "32vh",
      width: "39vw",
      color: "#2B1075",
      date: "17",
      image: Enigma,
    },
    {
      id: 5,
      name: "Decode Rush",
      description: ["Decode Rush is a unique and immersive outdoor quest designed to ignite your sense of adventure. Participants embark on a thrilling scavenger hunt, armed with just two crucial elements: a clue that leads to the next location and a riddle that holds the answer"],
      rules: [
        {
          ruleNo: 1,
          ruleDesc: "Contest will contain 5-6 problems that need to be coded in Python, C++, or C."
        },
        {
          ruleNo: 2,
          ruleDesc: "It will be individual competition hence teaming up is strictly restricted."
        },
        {
          ruleNo: 3,
          ruleDesc: "For the first correct submission of a question, you will receive the points currently available on that question."
        },
        {
          ruleNo: 4,
          ruleDesc: "For each wrong submission before the correct submission, 10 points will be deducted. If the question was already solved before, no points will be deducted for that question."
        },
        {
          ruleNo: 5,
          ruleDesc: "Plagiarism checks would be done after the contest."
        }
      ],
      height: "32vh",
      width: "39vw",
      color: "#529DA0",
      date: "17",

      image: rc,
    },
  ];

  return (
    <>
      <div>
        <div className="event-cont z-[1000] bg-[#1a1a1a96] h-[100vh] flex flex-col justify-end items-center w-[100vw]">
          <div className="head w-full h-[20%] bg--400 flex flex-col justify-end items-start px-[4vw] text-white">
            <h1 className="text-[5vw] bg--500 h-[16vh] flex justify-center items-center max-sm:text-[7vh]">EVENTS</h1>
          </div>
          <div className="maincontent lg:flex max-md:hidden w-[100%] h-[70%] bg--800 flex flex-col justify-center items-center  gap-[1vw]">
            <div className="flex flex-row gap-5  max-md:gap-4 max-md:flex-col">
              {eventsData.slice(0, 3).map((event, index) => (
                <Eventbox
                  key={event.id}
                  id={event.id}
                  name={event.name}
                  description={event.description}
                  rules={event.rules}
                  height={event.height}
                  width={event.width}
                  color={event.color}
                  date={event.date}
                  image={event.image}
                  mobileHeight="20vh" // Mobile specific height
                  mobileWidth="70vw"   // Mobile specific width
                />
              ))}
            </div>
            <div className="flex flex-row gap-5 max-md:gap-4 max-md:flex-col">
              {eventsData.slice(3).map((event, index) => (
                <Eventbox
                  key={event.id}
                  id={event.id}
                  name={event.name}
                  description={event.description}
                  rules={event.rules}
                  height={event.height}
                  width={event.width}
                  color={event.color}
                  date={event.date}
                  image={event.image}
                  mobileHeight="20vh" // Mobile specific height
                  mobileWidth="70vw"   // Mobile specific width
                />
              ))}
            </div>
          </div>

          <div className="res-events bg--900 max-lg:flex lg:hidden w-[100%] h-[70%] bg--500 flex flex-wrap justify-center items-center  gap-[3vh]">
          {eventsData.map((event, index) => (
                <Eventbox
                  key={event.id}
                  id={event.id}
                  name={event.name}
                  description={event.description}
                  rules={event.rules}
                  height={event.height}
                  width={event.width}
                  color={event.color}
                  date={event.date}
                  image={event.image}
                  mobileHeight="20vh" // Mobile specific height
                  mobileWidth="22vh"   // Mobile specific width
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
