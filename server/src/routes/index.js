import { Router } from "express";
import bookRoutes from "./book.routes";
import authRouter from "./auth.routes";
// Router URL: /api
const router = Router();

router.use("/auth", authRouter)
router.use("/books", bookRoutes);

export default router;
