import express from "express";
const router = express.Router({ mergeParams: true });

import {
	createReview,
	deleteReview,
	getReviewsByCourse,
	readReview,
	updateRating,
	updateReview,
} from "../controllers/review.js";
import authenticateToken from "../middlewares/authenticateToken.js";
import { isReviewAuthor } from "../middlewares/isAuthor.js";
import { wrapAsync } from "../utils/index.js";

router.get("/", wrapAsync(getReviewsByCourse));

router.get("/:reviewId", wrapAsync(readReview));

router.post("/", authenticateToken, wrapAsync(createReview));

router.put("/rating", authenticateToken, wrapAsync(updateRating));

router.put("/", authenticateToken, isReviewAuthor, wrapAsync(updateReview));

router.delete("/", authenticateToken, isReviewAuthor, wrapAsync(deleteReview));

export default router;
