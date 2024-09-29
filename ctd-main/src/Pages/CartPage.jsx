import { RiDeleteBin5Line } from "react-icons/ri";

const CartPage = () => {
  const eventReg = [
    {
      id: 1,
      eventName: "NCC",
      color: "#8B295E",
      price: 50, 
    },
    {
      id: 2,
      eventName: "DECODE RUSH",
      color: "#529DA0",
      price: 50, 
    },
    {
      id: 3,
      eventName: "NTH",
      color: "#4B178B",
      price: 50, 
    },
  ];

  const totalPrice = eventReg.reduce((acc, event) => acc + event.price, 0);

  return (
    <>
      <div className="cartPage h-[110vh] w-[100vw] bg--500 flex flex-col justify-center items-center">
        <div className="cartName h-[25vh] w-[100vw] bg--400 flex justify-start items-end px-[5vw]">
          <h1 className="text-[5vw] text-white">YOUR CART</h1>
        </div>
        <div className="complefrig flex h-[75vh] w-[100vw] justify-center items-center">
          <div className="divright h-[80vh] w-[65%] bg--500 flex items-center justify-center">
            <div className="eve-box h-[90%] w-[95%] bg-[#333333] flex items-center justify-start flex-col rounded-[20px] py-[3vh] gap-[3vh]">
              {eventReg.map((eve) => (
                <div
                  key={eve.id}
                  className="eventBox h-[15vh] w-[96%] flex justify-between items-center px-[2vw] rounded-[10px]"
                  style={{ backgroundColor: eve.color }}
                >
                  <h1 className="text-[4vw] text-white">{eve.eventName}</h1>
                  <RiDeleteBin5Line color="white" size={25} />
                </div>
              ))}
            </div>
          </div>

          <div className="divleft h-[100%] w-[35%] bg--300 flex items-center justify-center">
            <div className="cartcard h-[95%] w-[30vw] flex flex-col justify-start items-center px-[2vw] bg-[#333333] rounded-3xl">
              <h1 className="text-[5vw] text-white h-[20%]">INVOICE</h1>
              <div className="h-[70%] w-full flex flex-col justify-center items-start gap-[1vw] text-white px-[2vw]">
                {eventReg.map((event) => (
                  <div key={event.id} className="w-full text-[1.5vw] flex justify-between">
                    <h2>{event.id}. {event.eventName}</h2>
                    <h2>{event.price}$</h2>
                  </div>
                ))}
                <div className="w-full flex justify-between font-bold text-[1.5vw] border-t-2 pt-[2vh]">
                  <h2>TOTAL</h2>
                  <h2>{totalPrice}$</h2>
                </div>
              </div>
              <div className="w-full flex justify-center items-center">
                <button className="bg-white text-black py-[1vh] px-[8vw] rounded-full">PAY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
