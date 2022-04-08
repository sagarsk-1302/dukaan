import { createContext, useState, useEffect } from "react";
import {onAuthStateChangedListener} from "../../utils/firebase.utils/firebase.utils";
export const Usercontext = createContext({
    currentUser: null,
    setCurrentUser:() => null
}) 

export const UserProvider =({children}) =>{
    const [currentUser, setCurrentUser] =useState(null)
    useEffect(()=>{
        const response = onAuthStateChangedListener((user)=>{
            console.log(user);
            setCurrentUser(user);
        })
    },[])
    const value = {currentUser,setCurrentUser};
    return <Usercontext.Provider value={value} >{children}</Usercontext.Provider>
}