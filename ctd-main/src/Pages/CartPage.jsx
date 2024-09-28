import { useEffect, useState } from 'react';
import { getCart } from '../api/cart'; // Importing the API function

const CartPage = () => {
    const [eventReg, setEventReg] = useState([]); // Updated state for events

    useEffect(() => {
        // Fetch cart items on page load
        const fetchCartItems = async () => {
            try {
                const response = await getCart(); // Using the getCart API function
                setEventReg(response.data.cartItems); // Assuming the response has cartItems
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    return (
        <>
            <div className="cartPage h-[110vh] w-[100vw] bg--500 flex flex-col justify-center items-center">
                <div className="cartName h-[25vh] w-[100vw] bg--400 flex justify-start items-end px-[5vw]">
                    <h1 className="text-[5vw] text-white">YOUR CART</h1>
                </div>
                <div className="complefrig flex h-[75vh] w-[100vw] justify-center items-center">
                    <div className="divleft h-[100%] w-[35%] bg--300 flex items-center justify-center">
                        <div className="cartcard h-[95%] w-[25vw] flex justify-start items-end px-[2vw] bg-blue-800 rounded-3xl">
                            <h1 className="text-[5vw] text-white">CTD.</h1>
                        </div>
                    </div>
                    <div className="divright h-[80vh] w-[65%] bg--500 flex items-center justify-center">
                        <div className="eve-box h-[90%] w-[95%] bg-[#333333] flex items-center justify-start flex-col rounded-[20px] py-[3vh] gap-[3vh]">
                            {
                                eventReg.map((eve) => {
                                    return (
                                        <>
                                            <div key={eve.id} className="eventBox h-[15vh] w-[96%] bg-[#6193F4] flex justify-start items-center px-[2vw] rounded-[10px]">
                                                <h1 className="text-[4vw] text-white">{eve.eventName}</h1>
                                            </div>
                                        </>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartPage;
