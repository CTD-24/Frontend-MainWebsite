  import { NavLink, useParams } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
  import { addItemToCart } from "../redux/slices/cartSlice";
  import { useState } from "react";
  import Alert from "@mui/material/Alert";
  import AlertTitle from "@mui/material/AlertTitle";
  import RegisterForm from "../components/RegisterForm";
  import { FaPhone } from "react-icons/fa6";

  import axios from "axios";
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
    let prizes
    let date;
    let rules;
    let contact;
    let fees;
    let mode;

  if(eventName === "N.C.C."){
    name = "N.C.C."
    mode = "ONLINE"
    description = [
      "Think you're the best coder?",
      "Prove it in the National Computing Competition.",
      "Sign Up to compete for the 'Overlord Coder' title and get a chance to experience a real-world coding competition!",
      <>
      <div className=" w-full flex justify-between text-xl pt-4">
        <h2 className="w-fit flex text-[1.5vw] max-lg:text-[3vh] bg--500 h-[8vh] ">FEES: ₹20</h2>
        <h2 className="w-fit flex text-[1.5vw] max-lg:text-[3vh] bg--500 h-[8vh]">TIME: 8:00 PM - 10:00 PM</h2>
        <h2 className="w-fit flex text-[1.5vw] max-lg:text-[3vh] bg--500 h-[8vh]">MODE: {mode}</h2>
        </div>
       </>,
      

      ]

      fees = 20;

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

    prizes = [
      { winners: "1500" },
      { runnerUp: "1000" }
    ]

      date = "18"

      contact = [
        {name:"Atharv Fakatkar",num:9921277385},
        {name:"Palak Agrawal",num:7030301011},
        {name:"Shounak Mulay",num:7559179362},
      ]
      

    }

  else if(eventName==="R.C."){
    name = "R.C."
    mode = "ONLINE"
    description = [
      "Reverse Coding is a coding competition to analyze your problem solving ability with programming knowledge along with mathematical skills.",
      "Test your ability to decode the pattern through a decipher and code round in any of the languages - C, C++, Java and Python.",
      <div className=" w-full flex justify-between text-xl pt-4">
      <h2 className="w-fit flex text-[1.5vw] max-lg:text-[3vh] bg--500 h-[8vh]">FEES: ₹20</h2>
      <h2 className="w-fit flex text-[1.5vw] max-lg:text-[3vh] bg--500 h-[8vh]">TIME: 8:30 PM - 10:30 PM</h2>
      <h2 className="w-fit flex text-[1.5vw] max-lg:text-[3vh] bg--500 h-[8vh]">MODE: {mode}</h2>
      </div>,
      
    ]

      fees = 20;


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


    prizes = [
      { winners: "1500" },
      { runnerUp: "1000" }
    ]
    date = "17"

      contact = [
        {name:"Neel Satdive",num:9834762879},
        { name: "Divya Pardeshi", num: 9923844914 },
        { name: "Avadhut Giri", num: 7057420931 },

      ]

    }

  else if(eventName==="Decode Rush"){
    name = "Decode Rush"
    mode = "OFFLINE"
    description = [
      "Decode Rush is a unique and immersive outdoor quest designed to ignite your sense of adventure.",
      "Embark on a thrilling scavenger hunt, armed with just two crucial elements: a clue that leads to the next location and a riddle that holds the answer.",
      <div className=" w-full flex justify-between text-xl pt-4">
      <h2 className="w-fit flex text-[1.5vw] max-lg:text-[3vh] bg--500 h-[8vh] ">FEES: ₹50</h2>
      <h2 className="w-fit flex text-[1.5vw] max-lg:text-[3vh] bg--500 h-[8vh] ">TIME: 4:15 PM Onwards</h2>
      <h2 className="w-fit flex text-[1.5vw] max-lg:text-[3vh] bg--500 h-[8vh]">MODE: {mode}</h2>
      </div>,
    ]

      fees = 50;


      rules = [
        {
          ruleNo: 1,
          ruleDesc: "Each team can have a maximum of 4 participants."
        },
        {
          ruleNo: 2,
          ruleDesc: "The gameplay area is limited to the PICT campus (excluding buildings). No chits, hints, or clues are placed out."
        },
        {
          ruleNo: 3,
          ruleDesc: "Lawn areas, the GCR (Art Circle Room), and classrooms are NOT part of the gameplay area."
        },
        {
          ruleNo: 4,
          ruleDesc: "Hints for a question will lead you to a codeword and a specific location."
        },
        {
          ruleNo: 5,
          ruleDesc: "You must go to the location and provide the codeword to the volunteers present there."
        },
        {
          ruleNo: 6,
          ruleDesc: "Some questions will include fun side tasks that you must complete before moving on."
        },
        {
          ruleNo: 7,
          ruleDesc: "Sharing hints with members of other teams or anyone outside your team is strictly prohibited. Strict action will be taken if such behavior is observed."
        },
        {
          ruleNo: 8,
          ruleDesc: "Bring your registration receipts or screenshots of the Google Form to start the game."
        },
        {
          ruleNo: 9,
          ruleDesc: "You'll be able to cash in the bonus keys for hints on the day of the event"
        },
        {
          ruleNo: 10,
          ruleDesc: "The results announced are final and will not be changed."
        },
        {
          ruleNo: 11,
          ruleDesc: "If you have any doubts, ask the coordinators or volunteers for clarification."
        },
      ]

    prizes = [
      { winners: "2000" }
    ]
    date = "16"

      contact = [
        { name: "B Shrinidhi", num: 7506211747 },
        { name: "Chirag Meghani", num:9922684190 }
      ]

    }

  else if(eventName==="NTH"){
    name = "NTH"
    mode = "ONLINE"
    description = [
      "NTH is an online treasure hunt that encourages you to scour the nooks and crannies of the World Wide Web in search of answers for various mind twisters.",
      "Read between the lines, find the hidden clues and connect the dots.",
      "You can use every tool at your disposal. Even with Google and Wikipedia by your side, it's going to be fun and challenging.",
      <div className=" w-full flex justify-between text-xl pt-4">
      <h2 className="w-fit flex text-[1.5vw] max-lg:text-[3vh] bg--500 h-[8vh] ">FEES: FREE</h2>
      <h2 className="w-fit flex text-[1.5vw] max-lg:text-[3vh] bg--500 h-[8vh] ">TIME: 9:00 PM Onwards</h2>
      <h2 className="w-fit flex text-[1.5vw] max-lg:text-[3vh] bg--500 h-[8vh]">MODE: {mode}</h2>
      </div>,
    ]

      fees = 0;


      rules = [
        {
            ruleNo: 1,
            ruleDesc: "The questions in this contest have clues and hints in the form of images, video, GIFs, audio, and text."
        },
        {
            ruleNo: 2,
            ruleDesc: "A user can submit their answer after 'question/' in the URL by replacing put_your_answer_here; the answer shouldn't contain any spaces."
        },
        {
            ruleNo: 3,
            ruleDesc: "A correct answer will direct the user to the next question while an incorrect answer will redirect the user to the same question as before."
        },
        {
            ruleNo: 4,
            ruleDesc: "Top scorers will be visible on a dynamic leaderboard."
        },
        {
            ruleNo: 5,
            ruleDesc: "Additionally, a user will be awarded keys after solving a question and free keys will be awarded to active users after a certain duration of time."
        },
        {
            ruleNo: 6,
            ruleDesc: "Keys can be used to claim extra hints for questions further in the hunt."
        },
        {
            ruleNo: 7,
            ruleDesc: "The cost of the extra hint will be the ceiling function of 1.5 times the level of the current question."
        },
        {
            ruleNo: 8,
            ruleDesc: "A user can claim only 1 extra hint per question, so use this facility wisely."
        },
        {
            ruleNo: 9,
            ruleDesc: "After the 24-hour hunt, the one on the top of the leaderboard wins!"
        },
        {
            ruleNo: 10,
            ruleDesc: "Once the winner is declared there will no be change."
        }
    ];
    

      prizes = [
        { winners: "3000" },
        { runnerUp: "2000" }
      ]
      date = "19"
      contact = [
        { name: "Samir Wankhede", num: 7770011526 },
        { name: "B Shrinidhi", num: 7506211747 }

      ]

    }

  else if(eventName==="Enigma"){
    name = "Enigma"
    mode = "OFFLINE"
    description = [
      "Whether you're a puzzle enthusiast or a curious novice",
      "Get ready to ignite your cognitive powers with the ultimate head-scratching aptitude test!",
      <div className=" w-full flex justify-between text-xl pt-4">
      <h2 className="w-fit flex text-[1.5vw] max-lg:text-[3vh] bg--500 h-[8vh] ">FEES: FREE</h2>
      <h2 className="w-fit flex text-[1.5vw] max-lg:text-[3vh] bg--500 h-[8vh] ">TIME: 4:30 PM Onwards</h2>
      <h2 className="w-fit flex text-[1.5vw] max-lg:text-[3vh] bg--500 h-[8vh]">MODE: {mode}</h2>
      </div>,
    ]

      fees = 0;


      rules = [
        {
          ruleNo: 1,
          ruleDesc: "Electronic Gadgets(phones, calculators, smart watches) are prohibited."
        },
        {
          ruleNo: 2,
          ruleDesc: "The first round will be a 30 minute aptitude test consisting of 30 questions."
        },
        {
          ruleNo: 3,
          ruleDesc: "Only those who clear the first round will move on to the second round."
        },
        {
          ruleNo: 4,
          ruleDesc: "The second round will be conducted in two stages. First the selected participants will be provided 3 questions to be solved in 45 minutes. Then after the completion, an interview  to analyse the approach used to solve these questions will be conducted."
        },
        {
          ruleNo: 5,
          ruleDesc: "The evaluation for the second round will be on the basis of the detailed interview conducted after the round."
        },
        {
          ruleNo: 6,
          ruleDesc: "One Team can consist of Maximum of 2 Players"
        }
      ]

      prizes = [
        { winners: "3000" },
        { runnerUp: "2000" }
      ]
      date = "17"

      contact = [
        { name: "Jobin Ottaveedu", num: 9511227936 },
        { name: "Samruddhi Shinde", num: 9114555333 }
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

    const [alert, setAlert] = useState({
      message: "",
      severity: "",
      visible: false,
    });

    const addToCartHandler = async () => {
      
  
      const eventItem = {
        id: eventName,
        name: eventName,
        price: fees,
      };
  
      const formData = {
        teamName: null,
        username2: null,
        eventName: eventName,
        user_id:null,
      };
  
      try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/add_cart`, formData, {
          withCredentials: true,
        });

        dispatch(addItemToCart(eventItem));
        if(res.status == 201){
          setAlert({
            message: "Event Added to Cart!",
            severity: "success",
            visible: true,
          });
          setTimeout(() => {
            setAlert({
              message: "",
              severity: "",
              visible: false,
            });
          }, 5000); 
        }
        console.log("res", res);
        
      } catch (error) {
        console.error("error adding to cart", error);
        setAlert({
          message: "Event Already in the Cart!",
          severity: "error",
          visible: true,
        });
        setTimeout(() => {
          setAlert({
            message: "",
            severity: "",
            visible: false,
          });
        }, 5000); 
      }
  
      
    };

    return (
      <>
        <div className="Container bg-[#23232397]  min-h-[100vh] flex flex-col max-md:justify-end max-md:py-[3vh] justify-end items-center w-full">

          {isModalOpen && ((eventName !=="Decode Rush") && (eventName !=="NTH"))  && (
            <div className="modal fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black backdrop-blur-[5px] bg-opacity-50 z-50">
                {/* <button
                  className="close-button absolute top-2 right-2 text-black font-bold"
                  onClick={closeModal}
                >
                  X
                </button> */}
                <RegisterForm closeModal={closeModal} name={name} price={fees}  />
            </div>
          )}

          <div
            className="head w-[90%] h-[25%] max-md:w-[95%] max-md:justify-between max-md:h-[10vh] bg--500 flex justify-center items-center rounded-[1.5vw] backdrop-blur-[20px] border-[#0ddbffdd] border-[1px] px-[0.8vw] text-white"
          >
            <h1 className="text-[6vw] w-[95%] max-md:w-[30%] bg--500 ml-[1vw] max-md:ml-[5vw] max-md:text-[10vw] max-md:rounded-none max-md:h-full bg--600  h-[20vh] flex justify-between items-center rounded-[2vw] ">
              {name}
            </h1>
            <div
              className="bg-[#18d5f7dd] rounded-[1vw] leading-10 max-md:leading-7  h-[17vh] max-md:h-[90%]  max-md:w-[10vh] w-[9vw] flex flex-col justify-center items-center"
            >
              <h1 className="text-[4vw] max-md:text-[4vh]">{date}</h1>
              <h1 className="text-[2vw] max-md:text-[3vh]">OCTOBER</h1>
              {name == "NTH" && <h1 className="text-[2vw] max-md:text-[3vh]">(Tentative)</h1> }
              
            </div>
          </div>


          <div className="gap-[4vw] bg--600 h-[65vh] bg--900 max-md:flex-col max-md:h-[70vh] flex justify-center items-start w-full px-[4vw] py-[2vh] max-lg:py-[0vh] max-md:gap-[2vh] max-lg:px-[2vw] max-md:items-center ">
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
                      
                    >
                      {item.tabName}
                    </button>
                  );
                })}
              </div>
              <div className="eachcontent h-auto flex flex-col justify-center items-start bg--500 text-white bg--800  overflow-y-scroll">

                <div className="scroll-div h-[50vh] max-md:h-[40vh] flex flex-col justify-start gap-[2vh] items-center bg--500  text-white w-full  bg--800 px-[0vw]  ">
                  
                  {activeTab === 1 ? (
                  <div className="border-[#c4c4c44e] w-full border-[1px] backdrop-blur-[5px] h-auto max-md:px-[4vw] rounded-[2vh] max-md:py-[2vh] px-[1.5vw] py-[5vh]">
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
                        className="ruleDiv h-[auto] flex justify-start items-center bg--500  text-white backdrop-blur-[20px] border-[#c4c4c44e] border-[1px] px-[2vw] py-[2vh] w-full rounded-[1vh] gap-[3vh]"
                      >
                        <h2 className="text-[1.5vw] max-lg:text-[1.5vh]">{r.ruleNo}.</h2>
                        {r.ruleDesc}
                      </div>
                    ))
                  ) : (
                    <div className="contact-div  w-full border-[#c4c4c44e] border-[1px] backdrop-blur-[5px] h-full max-lg:px-[4vw] rounded-[2vh] max-lg:py-[2vh] px-[2vw] py-[4vh] text-[1.5vw] flex justify-center items-center gap-[5vw] " >
                      {
                        contact.map((item) => {
                          return(
                            <>
                              <div className="details h-auto w-auto">
                              <h2 className="bg--700 text-center text-xl md:text-3xl">{item.name}</h2>
                              <h3 className="flex bg--700 justify-center items-center gap-[1vw] text-xl md:text-3xl" ><FaPhone size={20} />{item.num}</h3>
                              </div>

                            </>
                          );
                        })
                      }
                    </div>
                  )}
                </div>
              </div>
            </div>

          
          <div className="prizepool border-[#c4c4c44e] border-[1px] backdrop-blur-[5px] bg--600  max-md:w-[100%] text-white w-[25%] h-full rounded-2xl p-[2vw] max-lg:h-[20vh] flex flex-col justify-between items-center">
            <h1 className="text-[3.5vw] max-md:text-[4vh]">PRIZE POOL</h1>
            <div className="flex flex-col gap-[1.5vh] text-[1.5vw] max-md:text-[1.5vh] w-full">
              <div className="flex justify-between w-full">
                <h2>WINNER</h2>
                <h2>₹{prizes[0].winners}</h2>
              </div>
              <div className="flex justify-between w-full">
                {prizes[1] && 
                <>
                <h2>RUNNER UP</h2>
                <h2>₹{prizes[1].runnerUp}</h2>
                </>}
                {/* {console.log("prz" , prizes[0])} */}
                
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
