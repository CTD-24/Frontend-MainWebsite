import { useState, useEffect } from "react";
import gsap from "gsap";
import QrModal from "./QrModal";
import axios from 'axios';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import validator from 'validator';

// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'


const RegisterForm = () => {

    const [activeButton, setActiveButton] = useState(false);

    const paymentArray = [
        { id: 1, pay: "QR" },

    ];


    
    const payClick = () => {
        if(activeButton){
            gsap.to(".qr", {
                display:"flex",
                ease:"power1.inOut",
                duration:0.5,
                opacity:1
            })
        }
        else{
            gsap.to(".qr", {
                display:"none"
            })
        }
    }

    const [uData, setUdata] = useState({
        team_name:"",
        problem_id:"",
        college:"",
        leader_name:"",
        email:"",
        mobile:"",
        place:"",
        utr:"",

    });


    const addChange = (e) => {
        const {name,value} = e.target;

        setUdata(() => {
            return{
                ...uData,
                [name]:value
            }
        })
    }

    const [flag, setFlag] = useState(false);
    const [alert, setAlert] = useState({ message: "", severity: "", visible: false });
    const [emailError, setEmailError] = useState('') 

    const reg = async () => {
        const { team_name, problem_id, college, leader_name, email, mobile, place, utr } = uData;
        if (!flag && team_name && problem_id && college && leader_name && email && mobile && place && utr) {

            const isEmailValid = validator.isEmail(email);
            const isMobileValid = !isNaN(mobile) && ((mobile.length > 7) &&( mobile.length < 15));
  
            if (isEmailValid && isMobileValid) { 
                // setEmailError('Valid Email :)') 
                try {
                    await axios.post("", uData);
                    setAlert({ message: "Registration successful!", severity: "success", visible: true });
                } catch (error) {
                    console.error("Error during registration:", error);
                    setAlert({ message: "Error during registration", severity: "error", visible: true });
                }
            }
            else {
                if (!isEmailValid) {
                    setAlert({ message: "Enter a Valid Email!", severity: "warning", visible: true });
                }
                if (!isMobileValid) {
                    setAlert({ message: "Enter a Valid Phone Number!", severity: "warning", visible: true });
                }
            }
            
        }
        else {
            setAlert({ message: "Invalid Input or Team Name already exists!", severity: "warning", visible: true });
        }
    };
 

    // Check if team name already exists
    const checkTeamExits = async () => {
        const { team_name } = uData;
        if (!team_name) {
            setAlert({ message: "Please enter a valid team name", severity: "warning", visible: true });
            return false;
        }
        try {
            const res = await axios.get(`${team_name}`);
            if (res.data.data) {
                setAlert({ message: "Team Name already exists", severity: "warning", visible: true });
                setFlag(true);
                return true;
            } else {
                setFlag(false);
                return false;
            }
        } catch (error) {
            console.error("Error checking team name:", error);
            setAlert({ message: "Error checking team name", severity: "error", visible: true });
            return false;
        }
    };

    const handleRegister = async () => {
        const teamExists = await checkTeamExits();
        if (!teamExists) {
            reg();
        }
    };
    

    return ( 
        <>
            <div className="alert-main h-auto w-auto absolute top-[3%] z-[20000]">
                {alert.visible && (
                    <Alert  severity={alert.severity}>
                        <AlertTitle>{alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}</AlertTitle>
                        {alert.message}
                    </Alert>
                )}
            </div>
            <div 
            className="reg-form-main max-sm:h-auto h-[80vh] mt-[10vh] max-sm:w-[95vw] w-[80vw] bg-zinc-800 max-sm:flex-col flex justify-center items-center rounded-[1vw]">
                <QrModal/>
                <div className="form-left h-full max-sm:h-[55vh] w-[50%] max-sm:w-[100%] bg--900 flex flex-col justify-center items-center ">

                    <div className="top-reg max-sm:h-[20%] h-[15%] w-full flex justify-start items-end bg--500 px-[4vw]">
                        <p className="text-[2vw] font-semibold text-white max-sm:text-[3vh]" >REGISTER</p>
                    </div>

                    <div className="fomr-content h-[85%] w-full flex flex-col justify-evenly items-center">
                    <input
                    onChange={addChange}
                    value={uData.team_name}
                     className=" text-white outline-none w-[80%] max-sm:px-[5vw] max-sm:w-[90%]  rounded-full  px-[2vw] py-[1.5vh] bg-zinc-700 " id="team_name" name="team_name" type="text" placeholder="Team name" />
                    <input
                    onChange={addChange}
                    value={uData.problem_id}
                    className=" text-white outline-none w-[80%] max-sm:px-[5vw] max-sm:w-[90%]  rounded-full px-[2vw] py-[1.5vh] bg-zinc-700 " id="problem_id" name="problem_id" type="text" placeholder="Problem_id" />
                    <input
                    onChange={addChange}
                    value={uData.college}
                    className=" text-white outline-none w-[80%] max-sm:px-[5vw] max-sm:w-[90%]  rounded-full px-[2vw] py-[1.5vh] bg-zinc-700 " id="college" name="college" type="text" placeholder="College name" />
                    <input
                    onChange={addChange}
                    value={uData.leader_name}
                    className=" text-white outline-none w-[80%] max-sm:px-[5vw] max-sm:w-[90%]  rounded-full px-[2vw] py-[1.5vh] bg-zinc-700 " id="leader_name" name="leader_name" type="text" placeholder="Leader name" />
                    <input
                    onChange={addChange}
                    value={uData.place}
                    className=" text-white outline-none w-[80%] max-sm:px-[5vw] max-sm:w-[90%]  rounded-full px-[2vw] py-[1.5vh] bg-zinc-700 " id="place" name="place" type="text" placeholder="Place" />
                    
                    </div>
                    

                </div>
                <div className="form-right h-full max-sm:h-[50vh] w-[50%] max-sm:w-[100%] bg--900 flex flex-col justify-start items-center bg--700 ">
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
                    {/* <PhoneInput
                    values={uData.mobile}
                    onChange={addChange}
                    className=" text-black max-sm:w-[90%] max-sm:px-[5vw] outline-none w-[80%] rounded-full px-[2vw] py-[1.5vh] bg-zinc-700 " id="mobile" name="mobile" type="tel" placeholder="Mobile no."/> */}

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
                </div>

            </div>
        </>
    )};
export default RegisterForm;