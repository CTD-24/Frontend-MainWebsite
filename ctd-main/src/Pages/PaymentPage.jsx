import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import qr from "../../assets/qrCode.png"
import qr from "../assets/pictqr.jpg";



const PaymentPage = () => {
  const [transactionId, setTransactionId] = useState("");

  const navigate = useNavigate();

  const [isClicked, setIsClicked] = useState(false);
  // Access the cart state from Redux
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  console.log("TOTAL: ",totalAmount);

  const [tabs, setTabs] = useState(1);

  const payTabs = [
    {
      id: 1,
      name: "QR",
    },
    {
      id: 2,
      name: "INVOICE",
    },
  ];

  const tabClick = (tabNum) => {
    setTabs(tabNum);
  };

  const makePayment = async () => {
    if (!transactionId) {
      return;
    }

    setIsClicked(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/submitTransaction`,
        { transaction_code: transactionId },
        { withCredentials: true }
      );

      console.log("transaction submitted successfully");
      // alert("Transaction successful!");
      toast.success("Transaction successful!");

      navigate('/');
    } catch (error) {
      // alert("Error making payment, Please try again!")
      toast.error("Error making payment, Please try again!");
      console.error("Error making payment", error);
    }
  };

  return (
    <div className="bg-[#00000095]  justify-center items-center min-h-screen w-full text-white flex flex-col p-4 ">


      <div className="pay-div backdrop-blur-[20px] border-[#0ddbffdd] border-[1px] h-auto w-[40%] flex flex-col justify-center items-center rounded-[1.5vw] max-lg:w-[100%] mt-[5%] ">

      <div className="mininav bg--500 h-[10vh] w-full flex gap-[2vw] justify-center max-md:justify-center items-center ">


        {payTabs.map((item) => {
          return (
            <button
              key={item.id}
              onClick={() => tabClick(item.id)}
              className={`tab-main max-md:text-[1.5vh]  max-md:px-[9vw] max-md:py-[1.5vh] px-[3vw] py-[1vh] rounded-full text-[1vw] transition-all duration-300 ${
                tabs === item.id
                  ? " text-black bg-[#138296] font-semibold"
                  : "bg-zinc-700 text-white"
              }`}
              style={tabs === item.id ? { backgroundColor: "#0ddbffdd" } : {}}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      {tabs === 1 ? (
        <div className="qrMain h-auto w-auto  relative bg-white flex flex-col justify-center items-center ">
        
        {/* <p>Scan the QR Code</p> */}
        <img className="image1  h-[30vh] w-[30vh] " src={qr} />
    </div>
      ) : tabs === 2 ? (
        <div className=" px-[2vw] h-auto py-[5vh] w-full bg--500">

          <h2 className="text-2xl font-bold">Cart Items</h2>

          <div className="bg--600 h-[30vh] w-full flex justify-center items-start overflow-y-scroll">

            <div className="pay-scroll h-auto w-full flex justify-center items-start gap-[3vh] py-[2vh] px-[1vw]  ">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex w-[35vw] bg--800 justify-between items-center border-b pb-2 px-[1vw] max-md:w-[80vw]"
                  >
                    <div>
                      <p className="text-lg">{item.name}</p>
                      {/* <p>Quantity: {item.quantity}</p> */}
                    </div>
                    <p >Price: ₹{item.price}</p>

                  </li>
                ))}
              </ul>
            )}
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-[3vh] font-semibold flex w-full justify-between items-center">Total Amount: <h3>₹{totalAmount}</h3></h3>
          </div>
        </div>
      ) : (
        <p>NO CONTENT</p>
      )}

      <div className="h-auto w-full flex justify-center items-center py-[1vh]">
        <input
          className="text-white p-2 outline-none bg-zinc-800"
          onChange={(e) => setTransactionId(e.target.value)}
          placeholder="Enter transaction id"
        />
      </div>

      <div className="h-auto w-full flex justify-center items-center py-[3vh]">
        <button
          onClick={makePayment}
          disabled={isClicked}
          className="bg-white text-black py-[1vh] px-[5vw] rounded-full border-white border-[1px] border-solid font-semibold hover:bg-transparent hover:text-white"
        >
          Submit
        </button>
      </div>

      </div>
    </div>
  );
};

export default PaymentPage;
