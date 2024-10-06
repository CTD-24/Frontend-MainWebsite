import { useState, useEffect } from "react";
import gsap from "gsap";
import QrModal from "./QrModal";
import axios from "axios";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import validator from "validator";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/slices/cartSlice";


const RegisterForm = ({closeModal}) => {
  const [activeButton, setActiveButton] = useState(false);

  const [showTeammateFields, setShowTeammateFields] = useState(false);
  const dispatch = useDispatch();


  const payClick = () => {
    if (activeButton) {
      gsap.to(".qr", {
        display: "flex",
        ease: "power1.inOut",
        duration: 0.5,
        opacity: 1,
      });
    } else {
      gsap.to(".qr", {
        display: "none",
      });
    }
  };

  const [uData, setUdata] = useState({
    team_name: "",
    username2:""
  });

  const addChange = (e) => {
    
    const { name, value } = e.target;

    setUdata(() => {
      return {
        ...uData,
        [name]: value,
      };
    });
  };


  const addToCartHandler = () => {
    const eventItem = {
      id: name,
      name: name,
      price: 3000,
    };

    dispatch(addItemToCart(eventItem));

    // Open the RegisterForm modal
  };



    

  return (
    <>
      {/* <div className="alert-main h-auto w-auto absolute top-[3%] z-[20000]">
        {alert.visible && (
          <Alert severity={alert.severity}>
            <AlertTitle>
              {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
            </AlertTitle>
            {alert.message}
          </Alert>
        )}
      </div> */}
      <div className="reg-form-main absolute max-sm:h-auto h-[70vh] mt-[10vh] max-md:w-[80vw] w-[40vw] backdrop-blur-[30px] bg-[#18181822] max-sm:flex-col flex justify-center items-center ">
        {/* <QrModal/> */}
        <IoClose color="white" onClick={closeModal} size={25} className="absolute right-[5%] top-[5%] cursor-pointer" />
        <div className="form-left h-full max-sm:h-[55vh] w-[100%] max-sm:w-[100%] rounded-[1vw] bg-zinc-800 bg--900 flex flex-col justify-center items-center ">
          <div className="top-reg max-sm:h-[20%] h-[20%] w-full flex justify-center items-end bg--500 px-[4vw]">
            <p className="text-[2vw] font-semibold text-white max-sm:text-[3vh]">
              REGISTER
            </p>
          </div>

          <div className="fomr-content text-white h-[80%] w-full flex flex-col justify-evenly items-center">
            <h2>Do you have a teammate ?</h2>
            <div className="flex justify-center items-center gap-4">
              <label htmlFor="teammate-yes">Yes</label>
              <input
                type="radio"
                id="teammate-yes"
                name="teammate"
                checked={showTeammateFields}
                onChange={() => setShowTeammateFields(true)}
              />

              <label htmlFor="teammate-no">No</label>
              <input
                type="radio"
                id="teammate-no"
                name="teammate"
                checked={!showTeammateFields}
                onChange={() => setShowTeammateFields(false)}
              />
            </div>

            {showTeammateFields && (
              <>
                <input
                  onChange={addChange}
                  value={uData.team_name}
                  className="text-white outline-none w-[80%] max-sm:px-[5vw] max-sm:w-[90%] rounded-full px-[2vw] py-[1.5vh] bg-zinc-700"
                  id="team_name"
                  name="team_name"
                  type="text"
                  placeholder="Team name"
                />
                <input
                  onChange={addChange}
                  value={uData.username2}
                  className="text-white outline-none w-[80%] max-sm:px-[5vw] max-sm:w-[90%] rounded-full px-[2vw] py-[1.5vh] bg-zinc-700"
                  id="username2"
                  name="username2"
                  type="text"
                  placeholder="Username 2"
                />
              </>
            )}

            <button

            onClick={addToCartHandler}

              className=" w-[40%] px-[2vw] py-[1vh] text-[#181818] max-sm:mt-[3vh] bg-white border-[1px] border-solid border-white hover:bg-transparent rounded-full max-sm:w-[70%] max-sm:py-[1.5vh]  hover:text-white font-bold"
            >
              ADD TO CART
            </button>
          </div>
        </div>
        {/* <div className="form-right h-full max-sm:h-[50vh] w-[50%] max-sm:w-[100%] bg--900 flex flex-col justify-start items-center bg--700 ">
                    <div className="top-reg max-sm:hidden h-[15%] w-full flex justify-start items-center bg--500 px-[2vw]">
                    </div>

                    <div className="fomr-content h-[70%] w-full flex flex-col justify-evenly items-center">
                    <input
                    onChange={addChange}
                    value={uData.email}
                    className=" text-white max-sm:w-[90%] max-sm:px-[5vw] outline-none w-[80%] rounded-full px-[2vw] py-[1.5vh] bg-zinc-700 " id="email" name="email" type="email" placeholder="Email" />
                    <input
                    onChange={addChange}
                    value={uData.mobile}
                    className=" text-white max-sm:w-[90%] max-sm:px-[5vw] outline-none w-[80%] rounded-full px-[2vw] py-[1.5vh] bg-zinc-700 " id="mobile" name="mobile" type="tel" placeholder="Mobile no." />
                    
                    <div className="qr-mode h-[8vh] bg--600 w-[100%] flex justify-center items-center gap-[3vw] ">
                    {paymentArray.map((item) => (
                        <button
                            key={item.id}
                            className={`payBtn hover:bg-[#dda500] bg-[#FFBF00] h-[6vh] w-[30%] text-[#181818]  rounded-[0.8vh] max-sm:w-[90%]`}
                            onClick={() => {
                                setActiveButton(true); // Set active button by id
                                payClick(); // Invoke payClick
                            }}
                        >
                            {item.pay}
                        </button>
                    ))}

                    </div>
                    <input
                    onChange={addChange}
                    values={uData.conPassword}
                    className=" text-white max-sm:w-[90%] max-sm:px-[5vw] outline-none w-[80%] rounded-full px-[2vw] py-[1.5vh] bg-zinc-700 " id="utr" name="utr" type="text" placeholder="Transaction ID" />
                </div>
                <button
                    onClick={handleRegister}
                  className=" w-[40%] px-[2vw] py-[1vh] max-sm:mt-[3vh] bg-white border-[1px] border-solid border-white hover:bg-transparent rounded-full max-sm:w-[70%] max-sm:py-[1.5vh]  hover:text-white font-bold" >REGISTER</button>
                </div> */}
      </div>
    </>
  );
};
export default RegisterForm;
