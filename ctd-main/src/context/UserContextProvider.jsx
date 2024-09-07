import UserContext from "./UserContext";
import { useState } from "react";


const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [img, setImg] = useState(null);

    

    return(
        <>
            <UserContext.Provider value={{user, setUser, img, setImg}} >
                {children}
            </UserContext.Provider>
        </>
    );
}

export default UserContextProvider;

