import { useSelector, useDispatch } from 'react-redux';
import { RiDeleteBin5Line } from "react-icons/ri";
import { removeItemFromCart } from '../redux/slices/cartSlice';
import { TbShoppingCartQuestion } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const toPage = () => {
    navigate('/events');
  }

  const dispatch = useDispatch();

  const totalPrice = cart.items.reduce((acc, event) => acc + event.price, 0);

  const handleDelete = async (eventId) => {
    dispatch(removeItemFromCart(eventId));

    const eventName = eventId;
    
    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/delete/${eventName}`,{},{withCredentials:true});
      console.log("res",res)
    } catch (error) {
      console.error("error adding to cart", error)

    }

  };

  return (
    <div className="cartPage h-[100vh] w-[100vw] bg-[#0000008e] flex flex-col justify-end items-center">
      {/* Cart Header */}
      <div className="cartName h-[30vh] w-[100vw] bg--800 flex justify-start items-end px-[5vw]">
        <h1 className="text-[5vw] text-white">YOUR CART</h1>
      </div>

      {/* Cart Content */}
      <div className="complefrig bg--400 flex h-[70vh] w-[100vw] justify-center items-center bg--600">
        
        {/* Cart Items */}
        <div className="divright h-[100%] w-[60%] bg--700 flex items-start justify-center">
          <div className="eve-box h-[95%] w-[95%] backdrop-blur-[20px] border-[#0ddbffdd] border-[1px] flex items-center justify-start flex-col rounded-[20px] py-[3vh] gap-[3vh]">
            {cart.items.length > 0 ? (
              cart.items.map((eve) => (
                <div
                  key={eve.name}
                  className="eventBox h-[12vh] w-[96%] flex justify-between items-center px-[2vw] rounded-[10px] bg-[#0b9cb2]"
                  style={{ backgroundColor: eve.color }}
                >
                  <h1 className="text-[4vw] text-white">{eve.name}</h1>
                  <RiDeleteBin5Line
                    color="white"
                    size={25}
                    onClick={() => handleDelete(eve.id)}
                    className="cursor-pointer"
                  />
                </div>
              ))
            ) : (
              <div className="text-[#A9A9A9]  h-full w-full flex flex-col justify-center items-center gap-[2vh] ">
                <TbShoppingCartQuestion size={50} color='#A9A9A9' />
                <h2  className='text-[2vw]'>Cart is Empty</h2>
                <button
                onClick={toPage}
                 className="bg-white text-black py-[0.8vh] px-[4vw] rounded-full border-white border-[1px] border-solid font-semibold hover:bg-transparent hover:text-white">
                  EVENTS
                </button>

                
              </div>
            )}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="divleft h-[100%] w-[35%] bg--800 flex items-start justify-center">
          <div className="cartcard h-[95%] w-[25vw] flex flex-col justify-start items-center px-[1vw] backdrop-blur-[20px] border-[#0ddbffdd] border-[1px] rounded-2xl">
            <h1 className="text-[4vw] text-white bg--500 h-[25%] flex justify-center items-center">INVOICE</h1>
            <div className="h-[55%] w-full flex flex-col justify-center items-start bg--500 gap-[1vw] text-white px-[1vw]">
              {cart.items.length > 0 ? (
                cart.items.map((event) => (
                  <div key={event.id} className="w-full text-[1.5vw] flex justify-between">
                    <h2>
                      {event.name}
                    </h2>
                    <h2>{event.price}$</h2>
                  </div>
                ))
              ) : (
                <div className="text-[#cbcbcb] h-auto w-full flex justify-center items-center text-[1.5vw]">
                  <h2>No events in cart.</h2>
                </div>
              )}
              {cart.items.length > 0 && (
                <div className="w-full flex justify-between font-bold text-[1.5vw] border-t-2 pt-[2vh]">
                  <h2>TOTAL</h2>
                  <h2>{totalPrice}$</h2>
                </div>
              )}
            </div>
            <div className="w-full flex justify-center items-center">
              {cart.items.length > 0 && (
                <button className="bg-white text-black py-[1vh] px-[8vw] rounded-full border-white border-[1px] border-solid font-semibold hover:bg-transparent hover:text-white">
                  PAY
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
