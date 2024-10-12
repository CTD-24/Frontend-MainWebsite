import { useState } from "react";
import gsap from "gsap";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/slices/cartSlice";
import axios from "axios";
import { toast } from "react-toastify";


const RegisterForm = ({ closeModal, name, price }) => {
  const [activeButton, setActiveButton] = useState(false);
  const [showTeammateFields, setShowTeammateFields] = useState(false);
  const [errors, setErrors] = useState({}); // State for error messages

  const dispatch = useDispatch();

  const [uData, setUdata] = useState({
    team_name: "",
    username2: "",
    userId2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUdata((prev) => ({ ...prev, [name]: value }));
  };

  const validateFields = () => {
    const newErrors = {};

    if (showTeammateFields) {
      if (!uData.team_name) newErrors.team_name = "Team name is required";
      if (!uData.username2) newErrors.username2 = "Username 2 is required";
      if (!uData.userId2) newErrors.userId2 = "User ID of Teammate is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // If no errors, return true
  };

  const addToCartHandler = async () => {
    if (!validateFields()) {
      return;
    }

    const eventItem = {
      id: name,
      name: name,
      price: price,
    };

    const formData = {
      teamName: uData.team_name,
      username2: uData.username2,
      eventName: name,
      user_id: uData.userId2,
    };

    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/add_cart`, formData, {
        withCredentials: true,
      });
      dispatch(addItemToCart(eventItem));
      toast.success(res.data.message);
      
      
    } catch (error) {
      // console.error("error adding to cart", error);
      toast.error(error.response.data.message);
    }

    
  };

  return (
    <div className="reg-form-main absolute h-[70vh] mt-[10vh] w-[40vw] max-lg:w-[100vw] backdrop-blur-[30px] bg-[#18181822] flex justify-center items-center">

      <IoClose color="white" onClick={closeModal} size={25} className="absolute right-[5%] top-[5%] max-lg:right-[10%] cursor-pointer" />

      
      <div className="form-left h-full w-[100%] max-lg:w-[90%] rounded-[1vw] bg-zinc-800 flex flex-col justify-center items-center">
        <div className="top-reg h-[20%] w-full flex justify-center items-end px-[4vw]">
          <p className="text-[2vw] max-lg:text-[4vh] font-semibold text-white">REGISTER</p>
        </div>

        <div className="form-content  text-white h-[80%] w-full flex flex-col justify-evenly items-center">
          <h2>Do you have a teammate?</h2>
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
                onChange={handleChange}
                value={uData.team_name}
                className="text-white outline-none w-[80%]  px-[2vw] py-[1.5vh] max-md: bg-zinc-700"
                id="team_name"
                name="team_name"
                type="text"
                placeholder="Team name"
              />
              {errors.team_name && <p className="text-red-500">{errors.team_name}</p>}

              <input
                onChange={handleChange}
                value={uData.username2}
                className="text-white outline-none w-[80%]  px-[2vw] py-[1.5vh] bg-zinc-700"
                id="username2"
                name="username2"
                type="text"
                placeholder="Username 2"
              />
              {errors.username2 && <p className="text-red-500">{errors.username2}</p>}

              <input
                onChange={handleChange}
                value={uData.userId2}
                className="text-white outline-none w-[80%]  px-[2vw] py-[1.5vh] bg-zinc-700"
                id="userId2"
                name="userId2"
                type="text"
                placeholder="User ID of Teammate"
              />
              {errors.userId2 && <p className="text-red-500">{errors.userId2}</p>}
            </>
          )}

          <button
            onClick={addToCartHandler}
            className="w-[40%] px-[2vw] py-[1vh] text-black bg-white border-[1px] border-solid border-white hover:bg-transparent rounded-full font-bold max-lg:text-[3vw] "
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
