import express from "express";
import { checkPassword } from "../middlewares/checkPassword";
const router = express.Router();
import { userController } from "../controllers/user.controller";

router.post("/login", userController.userLogin);

router.post("/sign-up", userController.userSignup);

export default router;
