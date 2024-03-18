import { useContext } from "react";
import authContext from "./authContext";
import { SIGNIN,SIGNOUT } from ".";



const useAuth=()=>{
    const {state,dispatch}=useContext(authContext)
    const handleSignUp=()=>{}
    const handleSignIn=()=>{}
    const handleSignOut=()=>{}
}