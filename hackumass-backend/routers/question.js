import express from "express";
const router = express.Router({ mergeParams: true });

import {
	createQuestion,
	deleteQuestion,
	getQuestionsByCourse,
	readQuestion,
	updateQuestion,
	updateRating,
} from "../controllers/question.js";
import authenticateToken from "../middlewares/authenticateToken.js";
import { isQuestionAuthor } from "../middlewares/isAuthor.js";
import { wrapAsync } from "../utils/index.js";

router.get("/", wrapAsync(getQuestionsByCourse));

router.get("/:questionId", wrapAsync(readQuestion));

router.post("/", authenticateToken, wrapAsync(createQuestion));

router.put("/rating", authenticateToken, wrapAsync(updateRating));

router.put("/", authenticateToken, isQuestionAuthor, wrapAsync(updateQuestion));

router.delete("/", authenticateToken, isQuestionAuthor, wrapAsync(deleteQuestion));

export default router;
