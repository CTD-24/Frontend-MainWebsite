import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../redux/slices/cartSlice";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import RegisterForm from "../components/RegisterForm";

const EventDetail = () => {
  const dispatch = useDispatch();

  const {eventName} = useParams();

  //   const eventsData = [
  //   {
  //     id:1,
  //     name: "NCC",
  //     description: [
  //       "The best algorithm is ten steps ahead of the second-best. So are you good enough to code the best one?",
  //       "The National Computing Competition lets you test your coding skills with other coders.",
  //       "Sign Up to compete for the 'Overlord Coder' title and get a chance to experience a real-world coding competition!",
  //   ],

        
  //     rules: [
  //       {
  //         ruleNo: 1,
  //         ruleDesc: "Contest will contain 5-6 problems that need to be coded in Python, C++, or C."
  //       },
  //       {
  //         ruleNo: 2,
  //         ruleDesc: "It will be individual competition hence teaming up is strictly restricted."
  //       },
  //       {
  //         ruleNo: 3,
  //         ruleDesc: "For the first correct submission of a question, you will receive the points currently available on that question."
  //       },
  //       {
  //         ruleNo: 4,
  //         ruleDesc: "For each wrong submission before the correct submission, 10 points will be deducted. If the question was already solved before, no points will be deducted for that question."
  //       },
  //       {
  //         ruleNo: 5,
  //         ruleDesc: "Plagiarism checks would be done after the contest."
  //       }
  //     ],
  //     height: "35vh",
  //       width: "28vw",
  //       color: "#E75480", 
  //       date: "11/09/2023",
  //       image: rc,
  //   },
  //   {
  //     id:2,
  //     name: "RC",
  //     description: ["Reverse Coding is a coding competition to analyze your problem solving ability with programming knowledge along with mathematical skills. Test your ability to decode the pattern through a decipher and code round in any of the languages - C, C++, Java and Python."],
  //     rules: [
  //       {
  //         ruleNo: 1,
  //         ruleDesc: "Contest will contain 5-6 problems that need to be coded in Python, C++, or C."
  //       },
  //       {
  //         ruleNo: 2,
  //         ruleDesc: "It will be individual competition hence teaming up is strictly restricted."
  //       },
  //       {
  //         ruleNo: 3,
  //         ruleDesc: "For the first correct submission of a question, you will receive the points currently available on that question."
  //       },
  //       {
  //         ruleNo: 4,
  //         ruleDesc: "For each wrong submission before the correct submission, 10 points will be deducted. If the question was already solved before, no points will be deducted for that question."
  //       },
  //       {
  //         ruleNo: 5,
  //         ruleDesc: "Plagiarism checks would be done after the contest."
  //       }
  //     ],
  //     height: "35vh",
  //     width: "28vw",
  //     color: "#4B178B", 
  //     image: rc,
  //   },
  //   {
  //     id:3,
  //     name: "NTH",
  //     description: ["Tech quiz for knowledge enthusiasts"],
  //     rules: [
  //       {
  //         ruleNo: 1,
  //         ruleDesc: "Contest will contain 5-6 problems that need to be coded in Python, C++, or C."
  //       },
  //       {
  //         ruleNo: 2,
  //         ruleDesc: "It will be individual competition hence teaming up is strictly restricted."
  //       },
  //       {
  //         ruleNo: 3,
  //         ruleDesc: "For the first correct submission of a question, you will receive the points currently available on that question."
  //       },
  //       {
  //         ruleNo: 4,
  //         ruleDesc: "For each wrong submission before the correct submission, 10 points will be deducted. If the question was already solved before, no points will be deducted for that question."
  //       },
  //       {
  //         ruleNo: 5,
  //         ruleDesc: "Plagiarism checks would be done after the contest."
  //       }
  //     ],
  //     height: "35vh",
  //     width: "28vw",
  //     color: "#741F8B",
  //     image: nth,
  //   },
  //   {
  //     id:4,
  //     name: "ENIGMA",
  //     description: ["Quiz for knowledge enthusiasts"],
  //     rules: [
  //       {
  //         ruleNo: 1,
  //         ruleDesc: "Contest will contain 5-6 problems that need to be coded in Python, C++, or C."
  //       },
  //       {
  //         ruleNo: 2,
  //         ruleDesc: "It will be individual competition hence teaming up is strictly restricted."
  //       },
  //       {
  //         ruleNo: 3,
  //         ruleDesc: "For the first correct submission of a question, you will receive the points currently available on that question."
  //       },
  //       {
  //         ruleNo: 4,
  //         ruleDesc: "For each wrong submission before the correct submission, 10 points will be deducted. If the question was already solved before, no points will be deducted for that question."
  //       },
  //       {
  //         ruleNo: 5,
  //         ruleDesc: "Plagiarism checks would be done after the contest."
  //       }
  //     ],
  //     height: "35vh",
  //     width: "43vw",
  //     color: "#2B1075", 
  //     image: Enigma,
  //   },
  //   {
  //     id:5,
  //     name: "DECODE RUSH",
  //     description: ["Decode Rush is a unique and immersive outdoor quest designed to ignite your sense of adventure. Participants embark on a thrilling scavenger hunt, armed with just two crucial elements: a clue that leads to the next location and a riddle that holds the answer"],
  //     rules: [
  //       {
  //         ruleNo: 1,
  //         ruleDesc: "Contest will contain 5-6 problems that need to be coded in Python, C++, or C."
  //       },
  //       {
  //         ruleNo: 2,
  //         ruleDesc: "It will be individual competition hence teaming up is strictly restricted."
  //       },
  //       {
  //         ruleNo: 3,
  //         ruleDesc: "For the first correct submission of a question, you will receive the points currently available on that question."
  //       },
  //       {
  //         ruleNo: 4,
  //         ruleDesc: "For each wrong submission before the correct submission, 10 points will be deducted. If the question was already solved before, no points will be deducted for that question."
  //       },
  //       {
  //         ruleNo: 5,
  //         ruleDesc: "Plagiarism checks would be done after the contest."
  //       }
  //     ],
  //     height: "35vh",
  //     width: "43vw",
  //     color: "#529DA0", 
  //     image: rc,
  //   },
  // ];

  // const { name, description: description,date, rules, color } = useSelector(
  //   (state) => state.event
  // );

  let name;
  let description;
  let date;
  let rules;
  let color;

  if(eventName === "NCC"){
    name = "NCC"
    description = [
      "The best algorithm is ten steps ahead of the second-best. So are you good enough to code the best one?",
      "The National Computing Competition lets you test your coding skills with other coders.",
      "Sign Up to compete for the 'Overlord Coder' title and get a chance to experience a real-world coding competition!",
    ]

    rules = [
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
    ]

  }

  else if(eventName==="RC"){
    name = "RC"
    description = [
      "The best algorithm is ten steps ahead of the second-best. So are you good enough to code the best one?",
      "The National Computing Competition lets you test your coding skills with other coders.",
      "Sign Up to compete for the 'Overlord Coder' title and get a chance to experience a real-world coding competition!",
    ]

    rules = [
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
    ]
  }

  else if(eventName==="Decode Rush"){
    name = "Decode Rush"
    description = [
      "The best algorithm is ten steps ahead of the second-best. So are you good enough to code the best one?",
      "The National Computing Competition lets you test your coding skills with other coders.",
      "Sign Up to compete for the 'Overlord Coder' title and get a chance to experience a real-world coding competition!",
    ]

    rules = [
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
    ]
  }

  else if(eventName==="NTH"){
    name = "NTH"
    description = [
      "The best algorithm is ten steps ahead of the second-best. So are you good enough to code the best one?",
      "The National Computing Competition lets you test your coding skills with other coders.",
      "Sign Up to compete for the 'Overlord Coder' title and get a chance to experience a real-world coding competition!",
    ]

    rules = [
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
    ]
  }

  else if(eventName==="Enigma"){
    name = "Enigma"
    description = [
      "The best algorithm is ten steps ahead of the second-best. So are you good enough to code the best one?",
      "The National Computing Competition lets you test your coding skills with other coders.",
      "Sign Up to compete for the 'Overlord Coder' title and get a chance to experience a real-world coding competition!",
    ]

    rules = [
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
    ]
  }

  const tabs = [
    {
      id: 1,
      tabName: "DETAILS",
    },
    {
      id: 2,
      tabName: "RULES",
    },
    {
      id: 3,
      tabName: "CONTACT",
    },
  ];

  const [activeTab, setActiveTab] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabClick = (tabNum) => {
    setActiveTab(tabNum);
  };

  // const addToCartHandler = () => {
  //   const eventItem = {
  //     id: name,
  //     name: name,
  //     price: 3000,
  //   };

  //   dispatch(addItemToCart(eventItem));

  //   // Open the RegisterForm modal
  //   setIsModalOpen(true);
  // };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="Container bg-[#23232397]  min-h-[100vh] flex flex-col max-md:justify-end max-md:py-[3vh] justify-end items-center w-full">
        {isModalOpen && (
          <div className="modal fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black backdrop-blur-[5px] bg-opacity-50 z-50">
              {/* <button
                className="close-button absolute top-2 right-2 text-black font-bold"
                onClick={closeModal}
              >
                X
              </button> */}
              <RegisterForm closeModal={closeModal} name={name}  />
          </div>
        )}

        <div
          style={{ backgroundColor: color }}
          className="head w-[90%] h-[25%] max-md:w-[95%] max-md:justify-between max-md:h-[10vh] bg--500 flex justify-center items-center rounded-[1.5vw] backdrop-blur-[20px] border-[#0ddbffdd] border-[1px] px-[0.8vw] text-white"
        >
          <h1 className="text-[6vw] w-[95%] max-md:w-[30%] bg--500 ml-[1vw] max-md:ml-[5vw] max-md:text-[10vw] max-md:rounded-none max-md:h-full bg--600  h-[20vh] flex justify-between items-center rounded-[2vw] ">
            {name}
          </h1>
          <div
            // style={{ color: color }}
            className="bg-[#18d5f7dd] rounded-[1vw] leading-10 max-md:leading-7  h-[17vh] max-md:h-[90%]  max-md:w-[10vh] w-[9vw] flex flex-col justify-center items-center"
          >
            <h1 className="text-[4vw] max-md:text-[4vh]">16</h1>
            <h1 className="text-[2vw] max-md:text-[3vh]">OCTOBER</h1>
          </div>
        </div>


        <div className="gap-[4vw] bg--600 h-[65vh] bg--600 max-md:flex-col max-md:h-auto flex justify-center items-start w-full px-[4vw] py-[2vh] max-md:gap-[0vh] max-md:px-[2vw] max-md:items-center ">
          <div className="content bg--800 max-md:w-[100%] h-full flex bg--600 flex-col w-[70%]">
            <div className="mininav bg--500 h-[10vh] flex gap-[2vw] justify-start max-md:justify-center items-center">
              {tabs.map((item) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => tabClick(item.id)}
                    className={`tab-main max-md:text-[1.5vh]  max-md:px-[9vw] max-md:py-[1.5vh] px-[3vw] py-[1.2vh] rounded-full text-[1vw] transition-all duration-300 ${
                      activeTab === item.id
                        ? " text-white bg-[#1a99b0]"
                        : "bg-zinc-700 text-white"
                    }`}
                    style={
                      activeTab === item.id ? { backgroundColor: color } : {}
                    }
                  >
                    {item.tabName}
                  </button>
                );
              })}
            </div>
            <div className="eachcontent h-auto flex flex-col justify-center items-start bg--500 text-white bg--800 overflow-y-scroll">
              <div className="scroll-div h-[50vh] max-md:h-[40vh] flex flex-col justify-start gap-[2vh] items-center bg--500  text-white  bg--800 px-[vw] ">
                
                {activeTab === 1 ? (
                <div className="border-[#c4c4c44e] border-[1px] backdrop-blur-[5px] h-auto max-md:px-[4vw] rounded-[2vh] max-md:py-[2vh] px-[1vw] py-[5vh]">
                  {description.map((descItem, index) => (
                    <p key={index} className="mb-[1vh]">
                      {descItem}
                    </p>
                  ))}
                  
                </div>
              )  : activeTab === 2 && rules && rules.length > 0 ? (
                  rules.map((r) => (
                    <div
                      key={r.ruleNo}
                      className="ruleDiv h-[auto] flex justify-start items-center bg--500  text-white backdrop-blur-[20px] border-[#c6f6ffdd] border-[1px] px-[2vw] py-[2vh] w-full rounded-[1vh] gap-[3vh]"
                    >
                      <h2 className="text-[1.5vw]">{r.ruleNo}.</h2>
                      {r.ruleDesc}
                    </div>
                  ))
                ) : (
                  <p>CONTACT</p>
                )}
              </div>
            </div>
          </div>

          
          <div className="prizepool border-[#c4c4c44e] border-[1px] backdrop-blur-[5px] bg--600  max-md:w-[100%] text-white w-[25%] h-full rounded-2xl p-[2vw] max-md:h-[20vh] flex flex-col justify-between items-center">
            <h1 className="text-[3.5vw] max-md:text-[4vh]">PRIZE POOL</h1>
            <div className="flex flex-col gap-[1.5vh] text-[1.5vw] max-md:text-[1.5vh] w-full">
              <div className="flex justify-between w-full">
                <h2>WINNER</h2>
                <h2>3000 $</h2>
              </div>
              <div className="flex justify-between w-full">
                <h2>RUNNER UP</h2>
                <h2>1500 $</h2>
              </div>
            </div>
            <button
              onClick={ () =>  setIsModalOpen(true)}
              className="bg-white text-black max-md:w-[50%] max-md:text-[1.5vh] font-bold px-[4vw] py-[1.5vh] rounded-full text-[1vw]"
            >
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetail;
