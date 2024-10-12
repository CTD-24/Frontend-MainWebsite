import { useSelector, useDispatch } from 'react-redux';
import { RiDeleteBin5Line } from "react-icons/ri";
import { removeItemFromCart } from '../redux/slices/cartSlice';
import { TbShoppingCartQuestion } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import QrModal from '../components/QrModal';
import gsap from 'gsap';
import { toast } from "react-toastify";
const CartPage = () => {
  const cart = useSelector((state) => state.cart);

 

  const navigate = useNavigate();

  const toPage = (link) => {
    navigate(link);
  }

  const dispatch = useDispatch();

  const totalPrice = cart.items.reduce((acc, event) => acc + event.price * event.quantity, 0);

  const handleDelete = async (eventId) => {
    const eventName = eventId;
  
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/delete/${eventName}`, {}, { withCredentials: true });
      dispatch(removeItemFromCart(eventId)); // Dispatch after success
      
    } 
    
    catch (error) {
      // console.error("error removing from cart", error);
      toast.error("Error Removing from Cart");
      
    }
  };


  // Fetching Events Registered 
  const regEvents = async () => {
  
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/view_cart`, {}, { withCredentials: true });
      // dispatch(removeItemFromCart(eventId)); // Dispatch after success
      
    } 
    
    catch (error) {
      // console.error("Error in cart", error);
      toast.error("Error Displaying Cart!");
      
    }
  };
  

  const [modalOpen, setModalOpen] = useState(false);

  const [activeButton, setActiveButton] = useState(false);



  useEffect(() => {
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
        duration: 0.5,
        opacity: 0,
      });
    }
  }, [activeButton]);


  return (
    <>
    {/* <QrModal/> */}

    <div className="cartPage min-h-[100vh] w-[100vw] bg-[#0000008e] flex flex-col justify-end items-center">
      
      {/* Cart Header */}
      <div className="cartName h-[30vh] w-[100vw] bg--800 flex justify-start items-end px-[5vw] max-lg:h-[10vh] ">
        <h1 className="text-[5vw] text-white max-lg:text-[5vh]">YOUR CART</h1>
      </div>

      {/* Cart Content */}
      <div className="complefrig bg--800 flex max-lg:h-[80vh] h-[70vh] w-[100vw] justify-center items-center max-lg:flex-col">
        
        {/* Cart Items */}
        <div className="divright h-[100%] w-[60%] bg--700 flex items-start justify-center max-lg:w-[100%] max-lg:h-[50%]  ">


          <div className="eve-box h-[95%] w-[95%] backdrop-blur-[20px] border-[#0ddbffdd] border-[1px] flex items-center justify-start flex-col bg--600 max-md:rounded-[2vh]  rounded-[3vh] py-[3vh]  max-lg:py-[1vh] overflow-y-scroll">


            <div className="cart-scroll bg--600 h-[100vh] w-full flex flex-col justify-evenly items-center gap-[3vh] max-lg:gap-[2vh] ">
            {cart.items.length > 0 ? (
              cart.items.map((eve) => (
                <div
                  key={eve.name}
                  className="eventBox h-[12vh] w-[96%] flex justify-between items-center px-[2vw] rounded-[10px] bg-[#0b9cb2] max-lg:h-[7vh] max-lg:rounded-[1vh] max-lg:px-[4vw] "
                  style={{ backgroundColor: eve.color }}
                >
                  <h1 className="text-[4vw] text-white max-lg:text-[5vh]">{eve.name}</h1>
                  <RiDeleteBin5Line
                    color="white"
                    size={25}
                    onClick={() => handleDelete(eve.name)}
                    className="cursor-pointer"
                  />
                </div>
              ))
            ) : (
              <div className="text-[#A9A9A9]  h-full w-full flex flex-col justify-center items-center gap-[2vh] ">
                <TbShoppingCartQuestion size={50} color='#A9A9A9' />
                <h2  className='text-[2vw]'>Cart is Empty</h2>
                <button
                onClick={() => {
                  toPage('/events')
                }}
                 className="bg-white text-black py-[0.8vh] px-[4vw] rounded-full border-white border-[1px] border-solid font-semibold hover:bg-transparent hover:text-white">
                  EVENTS
                </button>

                
              </div>
            )}
            </div>
          </div>
        </div>




        {/* Cart Summary */}
        <div className="divleft h-[100%] bg--700 max-lg:h-[50%] w-[35%] max-lg:w-[100%] bg--800 flex items-start justify-center">

          <div className="cartcard h-[95%] max-lg:w-[95%] w-[25vw] flex flex-col justify-start items-center px-[1vw] backdrop-blur-[20px] border-[#0ddbffdd] border-[1px] rounded-2xl">

            <h1 className="text-[4vw] text-white bg--500 h-[25%] flex justify-center items-center max-lg:text-[4vh]">INVOICE</h1>

            <div className="h-[55%] w-full flex flex-col justify-start items-center bg--500 gap-[1vw] text-white px-[1vw] max-lg:w-[90%] overflow-y-scroll ">

              <div className="invoice-scroll h-auto w-full flex flex-col justify-center items-center bg--700 ">
              {cart.items.length > 0 ? (
                cart.items.map((event) => (
                  <div key={event.id} className="w-full max-lg:text-[2vh] text-[1.5vw] flex justify-between">
                    <h2>
                      {event.name}
                    </h2>
                    <h2>₹{event.price}</h2>
                  </div>
                ))
              ) : (
                <div className="text-[#cbcbcb] h-auto w-full flex justify-center items-center text-[1.5vw]">
                  <h2>No events in cart.</h2>
                </div>
              )}
              </div>
              {cart.items.length > 0 && (
                <div className="w-full flex justify-between font-bold text-[1.5vw] border-t-2 pt-[2vh] max-lg:text-[2vh]">
                  <h2>TOTAL</h2>
                  <h2>₹{totalPrice}</h2>
                </div>
              )}
            </div>
            <div className="w-full flex justify-center items-center">
              {cart.items.length > 0 && (
                <button
                onClick={async () => {
                  if (cart.items.length === 0) {
                    toast.error("Your cart is empty! Please add items to proceed.");
                    return; 
                  }
                  if(totalPrice === 0){
                    let loadingToast = toast.loading("Processing Transaction!");
                    var min = 10000;
                    var max = 99999;
                    const transactionId = Math.floor(Math.random() * (max - min + 1)) + min;  
                    console.log("trsnidff" , transactionId);
                    try {
                      const response = await axios.post(
                        `${import.meta.env.VITE_BASE_URL}/api/submitTransaction`,
                        { transaction_code: transactionId },
                        { withCredentials: true }
                      );
                      toast.dismiss(loadingToast);
                      dispatch(clearCart());
                      // alert("Transaction successful!");
                      toast.success("Transaction successful!");
                      console.log("res" , response);
                      navigate('/');
                    } catch (error) {
                      // alert("Error making payment, Please try again!")
                      toast.dismiss(loadingToast);
                      toast.error(error.response.data.message);
                      // console.error("Error making payment", error);
                    }
                  }
                  else{
                    toPage('/pay')
                  }
                  
                }}
                
                 className="bg-white text-black py-[1vh] px-[8vw] rounded-full border-white border-[1px] border-solid font-semibold hover:bg-transparent hover:text-white max-lg:text-[2vh] max-lg:px-[12vw] ">
                  PAY
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CartPage;
