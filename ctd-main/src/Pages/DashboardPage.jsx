import { useContext } from "react";
import UserContext from "../context/UserContext";

const DashboardPage = () => {
    // const { user, img } = useContext(UserContext);
  
    // if (!user) {
    //   return <span className="text-white text-[2vw]">NOT LOGGED IN</span>;
    // }
  
    return (
      <div className="dashContainer h-screen w-full bg-[#181818] flex justify-center items-center ">
        {/* {img && <img className="h-[100px] w-[100px] object-cover" src={img} alt="IMAGE HERE" />}
        <span className="text-[2vw] text-white bg-green-500">Hello {user.username}</span> */}
        <h2 className="text-[3vw] text-white" >Dashboard</h2>
      </div>
    );
  };
  
 
export default DashboardPage;