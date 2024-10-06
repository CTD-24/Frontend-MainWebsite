import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../redux/slices/cartSlice";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import RegisterForm from "../components/RegisterForm";

const EventDetail = () => {
  const dispatch = useDispatch();
  const { name, desc: description,date, rules, color } = useSelector(
    (state) => state.event
  );

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
      <div className="Container bg-black min-h-[100vh] flex flex-col justify-end items-center w-full">
        {isModalOpen && (
          <div className="modal fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black backdrop-blur-[5px] bg-opacity-50 z-50">
              {/* <button
                className="close-button absolute top-2 right-2 text-black font-bold"
                onClick={closeModal}
              >
                X
              </button> */}
              <RegisterForm closeModal={closeModal}  />
          </div>
        )}

        <div
          style={{ backgroundColor: color }}
          className="head w-[90%] h-[25%] flex justify-center items-center rounded-[1.5vw] px-[0.8vw] text-white"
        >
          <h1 className="text-[6vw] w-[95%] bg--500 ml-[1vw] h-[20vh] flex justify-between items-center rounded-[2vw] ">
            {name}
          </h1>
          <div
            style={{ color: color }}
            className="bg-white rounded-[1.5vw] leading-10 h-[17vh] w-[9vw] flex flex-col justify-center items-center"
          >
            <h1 className="text-[4vw]">16</h1>
            <h1 className="text-[2vw]">OCTOBER</h1>
          </div>
        </div>
        <div className="gap-[4vw] bg--600 h-[65vh] flex justify-center items-start w-full px-[4vw] py-[2vh]">
          <div className="content h-full flex bg--600 flex-col w-[70%]">
            <div className="mininav bg--500 h-[10vh] flex gap-[2vw] justify-start items-center">
              {tabs.map((item) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => tabClick(item.id)}
                    className={`tab-main max-sm:text-[1.2vh] max-sm:py-[1.5vh] px-[3vw] py-[1.2vh] rounded-full text-[1vw] transition-all duration-300 ${
                      activeTab === item.id
                        ? " text-white"
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
              <div className="scroll-div min-h-[40vh] flex flex-col justify-start gap-[2vh] items-center bg--500  text-white  bg--800 px-[vw] ">
                {activeTab === 1 ? (
                <div className="bg-zinc-800 rounded-[2vh] px-[1vw] py-[5vh]">
                  {description.map((descItem, index) => (
                    <p key={index} className="mb-[1vh]">
                      {descItem}
                    </p>
                  ))}
                  <div className="prizes mt-[2vh]">
    <h3 className="text-xl">Date:</h3>
    <p>{date}</p>
</div>
                </div>
              )  : activeTab === 2 && rules && rules.length > 0 ? (
                  rules.map((r) => (
                    <div
                      key={r.ruleNo}
                      className="ruleDiv h-[auto] flex justify-start items-center bg--500  text-white bg-zinc-800 px-[2vw] py-[2vh] w-full rounded-[1vh] gap-[3vh]"
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
          <div className="prizepool bg-zinc-800 text-white w-[25%] h-full rounded-2xl p-[2vw] flex flex-col justify-between items-center">
            <h1 className="text-[3.5vw]">PRIZE POOL</h1>
            <div className="flex flex-col gap-[1.5vh] text-[1.5vw] w-full">
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
              className="bg-white text-black font-bold px-[4vw] py-[1.5vh] rounded-full text-[1vw]"
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
