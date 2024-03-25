import { Router } from "express";
import {healthCheck} from "../controllers"
import authRoutes from "./auth.routes"

const router = Router();


router.get("/",healthCheck)
router.use("/auth",authRoutes)

export default router;