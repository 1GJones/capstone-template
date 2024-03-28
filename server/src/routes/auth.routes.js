import { Router } from "express";
import { validateSignIn, validateSignUp } from "../middleware/validation.middleware";
import { handleSignIn, handleSignUp } from "../controllers/auth.controllers";
import { handleGetUserByUserName } from "../services/userAuth.services";

const authRouter = Router()
authRouter
    .post("/signup", validateSignUp, handleSignUp)
    .post("/signin", validateSignIn, handleSignIn)

authRouter
    .get("/:userName", handleGetUserByUserName);
export default authRouter;