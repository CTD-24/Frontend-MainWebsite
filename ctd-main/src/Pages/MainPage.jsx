// import green from "../assets/greenPexel.jpg";
// import cube from "../assets/blueCube.jpg";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap"
// import { useEffect } from "react";
// const MainPage = () => {

//     useEffect(() => {
//         let tl = gsap.timeline()
//         tl
//             .from(".mainText1", {
//                 y:"200px",
//                 duration:0.8
//             })
//             .from(".mainText2", {
//                 y:"200px",
//                 duration:0.8
//             })
//             .from(".mainText3", {
//                 y:"200px",
//                 duration:0.8
//             })
//             .from(".imageCont1", {
//                 width:"0px",
//                 opacity:0,
//                 duration:0.8
//             },"img")
//             .from(".imageCont2", {
//                 width:"0px",
//                 opacity:0,
//                 duration:0.8

//             })
//     }, []);
//     return ( 
//         <>
//             <div className="main-container h-[100%] w-full bg-[#181818] flex justify-center items-center">
//                 <div className="circle1 absolute h-[120px] w-[120px] rounded-full bg-blue-500 top-[10%] left-[-5%] blur-[200px] "></div>
//                 <div className="circle2 absolute h-[120px] w-[120px] rounded-full bg-blue-500 bottom-[10%] right-[-5%] blur-[200px] "></div>

//                 <div className="inner-container h-[100%] w-[55%] bg--500  flex flex-col justify-center items-center">
//                     <div className="top h-[25%] w-full bg--400 flex justify-start items-center overflow-hidden ">
//                         <h1 className="mainText1 text-white text-[150px] font-bold">CREDENZ</h1>
//                     </div>
//                     <div className="mid h-[30%] w-full bg--400 flex justify-start items-center gap-[30px] ">
//                         <div className="text1 h-full w-[50%] bg--500 overflow-hidden flex justify-center items-center ">
//                             <h1 className="mainText2 text-white text-[150px] font-bold">TECH</h1>
//                         </div>
//                         <div className="imageCont1 h-[140px] w-[350px] rounded-full bg-blue-500">
//                             {/* <img className=" image1 h-[100%] w-[100%] rounded-full bg-cover" src={cube} alt="" /> */}

//                         </div>
//                     </div>
//                     <div className="bottom h-[25%] w-full bg--400 flex justify-start items-center gap-[30px]">
//                         {/*  */}
//                         <div className="imageCont2 h-[140px] w-[350px] rounded-full bg-blue-500">
//                             {/* <img className="image2 h-[140px] w-[350px] rounded-full " src={green} alt="" /> */}
//                         </div>
//                         <div className="text1 h-full w-[55%] bg--500 overflow-hidden flex justify-center items-center ">
//                             <h1 className="mainText3 text-white text-[150px] font-bold">DAYS</h1>
//                         </div>
//                     </div>
//                     <div className="btn h-[20%] w-full bg--500 flex justify-center items-center ">
//                         <button className="h-[50px] w-[140px] bg-[#3385FF] rounded-full font-bold ">EXPLORE</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//      );
// }
 
// export default MainPage;