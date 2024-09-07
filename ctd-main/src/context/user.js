// import { createContext, useContext } from "react";

// export const PersonContext = createContext({
//     names:"",
//     setNames: () => {},

// });

// export const PersonProvider = PersonContext.Provider;

// export default function usePerson(){
//     return useContext(PersonContext);
// }

// // import { createContext, useContext, useState } from "react";

// // // Create a context with default values
// // export const PersonContext = createContext({
// //   names: "",
// //   setNames: () => {}, // This is a placeholder function
// // });

// // export const PersonProvider = ({ children }) => {
// //   const [names, setNames] = useState("");

// //   return (
// //     <PersonContext.Provider value={{ names, setNames }}>
// //       {children}
// //     </PersonContext.Provider>
// //   );
// // };

// // // Custom hook to use the PersonContext
// // export default function usePerson() {
// //   return useContext(PersonContext);
// // }
