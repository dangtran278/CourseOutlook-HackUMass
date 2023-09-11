import express from "express";
const router = express.Router({ mergeParams: true });

import {
	createAnswer,
	deleteAnswer,
	getAnswersByQuestion,
	readAnswer,
	updateAnswer,
	updateRating,
} from "../controllers/answer.js";
import authenticateToken from "../middlewares/authenticateToken.js";
import { isAnswerAuthor } from "../middlewares/isAuthor.js";
import { wrapAsync } from "../utils/index.js";

router.get("/", wrapAsync(getAnswersByQuestion));

router.get("/:answerId", wrapAsync(readAnswer));

router.post("/", authenticateToken, wrapAsync(createAnswer));

router.put("/rating", authenticateToken, wrapAsync(updateRating));

router.put("/", authenticateToken, isAnswerAuthor, wrapAsync(updateAnswer));

router.delete("/", authenticateToken, isAnswerAuthor, wrapAsync(deleteAnswer));

export default router;
