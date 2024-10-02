import { useSelector, useDispatch } from 'react-redux';
import { RiDeleteBin5Line } from "react-icons/ri";
import { removeItemFromCart } from '../redux/slices/cartSlice';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const totalPrice = cart.items.reduce((acc, event) => acc + event.price, 0);

  const handleDelete = (eventId) => {
    dispatch(removeItemFromCart(eventId)); // Pass eventId directly
  };

  return (
    <div className="cartPage h-[110vh] w-[100vw] bg-gray-700 flex flex-col justify-center items-center">
      {/* Cart Header */}
      <div className="cartName h-[25vh] w-[100vw] bg-gray-800 flex justify-start items-end px-[5vw]">
        <h1 className="text-[5vw] text-white">YOUR CART</h1>
      </div>

      {/* Cart Content */}
      <div className="complefrig flex h-[75vh] w-[100vw] justify-center items-center">
        
        {/* Cart Items */}
        <div className="divright h-[80vh] w-[65%] bg-gray-700 flex items-center justify-center">
          <div className="eve-box h-[90%] w-[95%] bg-[#333333] flex items-center justify-start flex-col rounded-[20px] py-[3vh] gap-[3vh]">
            {cart.items.length > 0 ? (
              cart.items.map((eve) => (
                <div
                  key={eve.name}
                  className="eventBox h-[15vh] w-[96%] flex justify-between items-center px-[2vw] rounded-[10px]"
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
              <div className="text-white text-[2vw]">Your cart is empty.</div>
            )}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="divleft h-[100%] w-[35%] bg-gray-800 flex items-center justify-center">
          <div className="cartcard h-[95%] w-[30vw] flex flex-col justify-start items-center px-[2vw] bg-[#333333] rounded-3xl">
            <h1 className="text-[5vw] text-white h-[20%]">INVOICE</h1>
            <div className="h-[70%] w-full flex flex-col justify-center items-start gap-[1vw] text-white px-[2vw]">
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
                <div className="text-white text-[2vw]">No events in cart.</div>
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
                <button className="bg-white text-black py-[1vh] px-[8vw] rounded-full">
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
