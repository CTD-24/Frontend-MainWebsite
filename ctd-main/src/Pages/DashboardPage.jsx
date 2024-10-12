import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";
import { onLogout } from "../api/auth";
import { unauthenticateUser } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import astro from "../assets/astronaut.png";
import { useSelector, useDispatch } from "react-redux";
import { IoIosMusicalNote } from "react-icons/io";
import { faker } from '@faker-js/faker';

const DashboardPage = () => {
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [userName, setUsername] = useState("");
  const [userId, setUserId] = useState('')
  const [paidOrders, setPaidOrders] = useState([]); // State to hold paid orders
  const [pendingOrders, setPendingOrders] = useState([]);

  const handleLogout = async () => {
    try {
      await onLogout();
      dispatch(unauthenticateUser());
      navigate("/login");
    } catch (error) {
      // console.log(error.message);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/profile`, { withCredentials: true });
        setUserId(res.data.user.id)
        setFirstName(res.data.user.first_name);
        setUsername(res.data.user.username);
      } catch (error) {
        console.error("Error fetching user", error);
      }

      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/my_orders`, { withCredentials: true });
        // console.log(res.data);
        setPaidOrders(res.data.nonPendingOrders); // Set paid orders in state
      } catch (error) {
        // console.error("Error fetching orders", error);
      }

      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/mypending_orders`, { withCredentials: true });
        setPendingOrders(res.data.pendingOrders); // Set paid orders in state
      } catch (error) {
        // console.error("Error fetching orders", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="bg-[#000000aa] min-h-screen w-full text-white flex flex-col">
      <div className="flex-grow bg--500 flex flex-col justify-center items-center py-8 px-8">
        <div className="bg-transparent max-md:flex-col max-md:justify-center max-md:items-center backdrop-blur-[10px] border-[#06697add] border-[1px] px-[2vw] py-[8vh] rounded-lg  w-[60vw] max-md:w-[90vw] bg--400 flex space-x-8 max-lg:py-[5vh] max-lg:space-x-0">
          <div className="w-1/2 bg--900 flex justify-center items-center">
            <img
              src={astro}
              alt="Profile"
              className="w-[15vw] h-[15vw] max-lg:h-[15vh] max-lg:w-[15vh] bg--500 object-contain"
            />
          </div>

          <div className="w-1/2 max-lg:w-[90%] bg--600 max-lg:py-[3vh] space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">{firstName}</h2>
                <p className="text-gray-400">{userName}</p>
                <p className="text-gray-400">User Id : {userId}</p>
              </div>
              <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">
                Edit
              </button>
            </div>

            <div className="space-y-2 max-lg:w-full h-auto bg--600">

              {/* Displaying Paid Orders */}
              <div className="bg--600 max-lg:py-[2vh] w-full p-4 rounded-md">
                <h3 className="text-xl mb-4 font-bold">My Paid Orders</h3>
                {paidOrders && paidOrders.length > 0 ? (
                  <ul className="space-y-2">
                    {paidOrders.map((order) => (
                      <li key={order.cart_id} className="flex justify-between bg-gray-800 px-4 py-2 rounded-lg">
                        <div>
                          <p className="font-semibold">{order.event_name}</p>
                        </div>
                        <div>
                          <p className="text-green-500">{order.is_paid ? "Paid" : "Not Paid"}</p>
                          <p className="text-gray-400">{new Date(order.createdAt).toLocaleDateString()}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No paid orders found.</p>
                )}
              </div>

              <div className="bg--600 max-lg:py-[2vh] w-full mt-2 p-4 rounded-md">
                <h3 className="text-xl mb-4 font-bold">My Pending Orders</h3>
                {pendingOrders && pendingOrders.length > 0 ? (
                  <ul className="space-y-2">
                    {pendingOrders.map((order) => (
                      <li key={order.cart_id} className="flex justify-between bg-gray-800 px-4 py-2 rounded-lg">
                        <div>
                          <p className="font-semibold">{order.event_name}</p>
                        </div>
                        <div>
                          <p className="text-red-500">Pending</p>
                          {/* <p className="text-gray-400">{new Date(order.createdAt).toLocaleDateString()}</p> */}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No paid orders found.</p>
                )}
              </div>

              <div className="h-auto max-lg:py-[2vh] max-lg:flex lg:hidden bg--600 w-full flex items-center justify-center">
                <button
                  onClick={handleLogout}
                  className="loginButton bg-red-600 hover:bg-red-900 text-white text-uppercase flex justify-center items-center w-[80%] h-[6vh] border-none rounded-[0.6vw] cursor-pointer font-semibold text-[2vh]"
                >
                  LOGOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
