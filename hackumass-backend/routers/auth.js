import express from "express";
import { googleLoginUser } from "../controllers/auth.js";
import { wrapAsync } from "../utils/index.js";

const router = express.Router({ mergeParams: true });

router.post("/googlelogin", googleLoginUser);

export default router;
