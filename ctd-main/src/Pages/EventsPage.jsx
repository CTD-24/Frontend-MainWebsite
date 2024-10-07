import Eventbox from "../components/Eventbox";
import rc from "../assets/rc.png";
import Enigma from "../assets/Enigma.png";
import nth from "../assets/nth.png";

const EventsPage = () => {
  const eventsData = [
    {
      id:1,
      name: "NCC",
      description: [
        "The best algorithm is ten steps ahead of the second-best. So are you good enough to code the best one?",
        "The National Computing Competition lets you test your coding skills with other coders.",
        "Sign Up to compete for the 'Overlord Coder' title and get a chance to experience a real-world coding competition!",
    ],

        
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
      height: "35vh",
        width: "28vw",
        color: "#E75480", 
        date: "11/09/2023",
        image: rc,
    },
    {
      id:2,
      name: "RC",
      description: ["Reverse Coding is a coding competition to analyze your problem solving ability with programming knowledge along with mathematical skills. Test your ability to decode the pattern through a decipher and code round in any of the languages - C, C++, Java and Python."],
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
      height: "35vh",
      width: "28vw",
      color: "#4B178B", 
      image: rc,
    },
    {
      id:3,
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
      height: "35vh",
      width: "28vw",
      color: "#741F8B",
      image: nth,
    },
    {
      id:4,
      name: "ENIGMA",
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
      height: "35vh",
      width: "43vw",
      color: "#2B1075", 
      image: Enigma,
    },
    {
      id:5,
      name: "DECODE RUSH",
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
      height: "35vh",
      width: "43vw",
      color: "#529DA0", 
      image: rc,
    },
  ];

  return (
    <>
      <div>
        <div className="Container bg-green-500 min-h-[105vh] flex flex-col justify-center items-center w-[100vw]">
          <div className="head w-full h-[20%] bg--400 flex flex-col justify-center items-start px-[4vw] text-white">
            <h1 className="text-[6vw] bg--500 h-[16vh] flex justify-center items-center">
              EVENTS
            </h1>
          </div>
          <div className="maincontent w-[100%] h-[80%] bg-red-500 flex flex-col justify-start items-center flex-wrap gap-[2vw] px-[4vw]">
            <div className="flex flex-row gap-8 max-md:flex-col">
              {eventsData.slice(0, 3).map((event, index) => (
                <Eventbox
                key={event.id} // Using unique event.id as key
              id={event.id}
              name={event.name}
              description={event.description}
              rules={event.rules}
              height={event.height}
              width={event.width}
              color={event.color}
              date={event.date} // Pass date as a prop
              image={event.image}
                />
              ))}
            </div>
            <div className="flex flex-row gap-8 max-md:flex-col">
              {eventsData.slice(3).map((event, index) => (
                <Eventbox
                key={event.id} // Using unique event.id as key
              id={event.id}
              name={event.name}
              description={event.description}
              rules={event.rules}
              height={event.height}
              width={event.width}
              color={event.color}
              date={event.date} // Pass date as a prop
              image={event.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
