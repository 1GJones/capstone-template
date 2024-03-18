import { useReducer } from "react";
import authContext from "./Authprovider/authContext";


const intialState ={
    user:null,
    isAuthenticated:null,
};

export const SIGNIN="SIGNIN";
export const SIGNOUT= "SIGNOUT";

const reducer =(state,action)=>{
    switch(action.type){
case SIGNIN:{
    return{
        ...state,
        user:action.payload,
        isAuthenticate:true,
    }
}
case SIGNOUT:
    return{
        ...state,
        user:null,
        isAuthenticated:false,
    }
    default:{
        return state
    }
    }
}



const AuthProvider = ({children})=>{
    const [state ,dispatch]=useReducer(reducer,intialState)
    return <authContext.Provider value ={{state,dispatch}}>
        {children}
        </authContext.Provider>
}
export default AuthProvider