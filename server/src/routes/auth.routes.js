 import {Router}from express
 import {handleSignIn, handleSignUp}from "../controllers/auth.controllers"
 import{
    validatesSignIn,
    validatesSignUp,
 }from "../middleware/validation.middleware";

 const router =Router()

 router.post ("/signup", validatesSignUp, handleSignUp)
 router.post ("/signin", validatesSignIn, handleSignIn)

 export default router; 