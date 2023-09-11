import Answer from "../models/answer.js";
import Question from "../models/question.js";
import Review from "../models/review.js";

export const isReviewAuthor = async (req, res, next) => {
	const { id } = req.body;
	const review = await Review.findById(id);
	if (!review.user.equals(req.user._id)) {
		return res.status(401).json({
			status: 401,
			message: "Not authorized",
		});
	}
	next();
};
export const isQuestionAuthor = async (req, res, next) => {
	const { id } = req.body;
	const question = await Question.findById(id);
	if (!question.user.equals(req.user._id)) {
		return res.status(401).json({
			status: 401,
			message: "Not authorized",
		});
	}
	next();
};
export const isAnswerAuthor = async (req, res, next) => {
	const { id } = req.body;
	const answer = await Answer.findById(id);
	if (!answer.user.equals(req.user._id)) {
		return res.status(401).json({
			status: 401,
			message: "Not authorized",
		});
	}
	next();
};
