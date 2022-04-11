import { createContext, useState, useEffect, useReducer } from "react";
import {onAuthStateChangedListener} from "../../utils/firebase.utils/firebase.utils";
export const Usercontext = createContext({
    currentUser: null,
    setCurrentUser:() => null
}) 
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER:"SET_CURRENT_USER"
}
const userReducer = (state,action)=>{
    console.log("dispatch loaded")
    const {type,payload}=action
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                currentUser:payload
            }
        default :
            throw new Error(`Unhandled type ${type} in useReducer`)
    }
}
const INITIAL_STATE = {
    currentUser:null
}
export const UserProvider =({children}) =>{
    // const [currentUser, setCurrentUser] =useState(null)
    const [state, dispatch] = useReducer(userReducer,INITIAL_STATE)
    const currentUser = state.currentUser
    const setCurrentUser = (user)=>{
        dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER, payload:user})
    }

    useEffect(()=>{
        const response = onAuthStateChangedListener((user)=>{
            console.log(user);
            setCurrentUser(user);
        })
    },[])
    const value = {currentUser,setCurrentUser};
    return <Usercontext.Provider value={value} >{children}</Usercontext.Provider>
}