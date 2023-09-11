import Answer from "../models/answer.js";
import Course from "../models/course.js";
import Question from "../models/question.js";
import User from "../models/users.js";

import { ExpressError } from "../utils/index.js";

export const createAnswer = async (req, res, next) => {
	const { content, course, user, question } = req.body;
	const foundUser = await User.findById(user);
	if (!foundUser) {
		throw new ExpressError("User not found", 404);
	}
	const foundCourse = await Course.findById(course);
	if (!foundCourse) {
		throw new ExpressError("Course not found", 404);
	}
	const foundQuestion = await Question.findById(question);
	if (!foundQuestion) {
		throw new ExpressError("Question not found", 404);
	}
	const answer = new Answer({ content, course, user, question });
	await answer.save();
	res.status(200).json({ status: 200, message: "Answer created", data: answer });
};

export const getAnswersByQuestion = async (req, res, next) => {
	const { question } = req.query;
	const answers = await Answer.find({ question });
	res.status(200).json({ status: 200, message: "", data: answers || [] });
};

export const readAnswer = async (req, res, next) => {
	const { id } = req.body;
	const answer = await Answer.findById(id);
	if (!answer) {
		throw new ExpressError("Answer not found", 404);
	}
	res.status(200).json({ status: 200, message: "", data: answer });
};

export const updateRating = async (req, res, next) => {
	const { id, upvote, downvote } = req.body;
	const answer = await Answer.find({ _id: id });
	if (answer.length === 0) {
		throw new ExpressError("Review not found", 404);
	}
	await answer.updateOne({ upvote, downvote });
	await answer.save();
	res.status(200).json({ status: 200, message: "Answer rating updated", data: answer[0] });
};

export const updateAnswer = async (req, res, next) => {
	const { id, content } = req.body;
	const answer = await Answer.find({ _id: id });
	if (answer.length === 0) {
		throw new ExpressError("Answer not found", 404);
	}
	await answer.updateOne({ content });
	await answer.save();
	res.status(200).json({ status: 200, message: "Answer updated", data: answer[0] });
};

export const deleteAnswer = async (req, res, next) => {
	const { id } = req.body;
	const answer = await Answer.findById(id);
	if (answer.length === 0) {
		throw new ExpressError("Answer not found", 404);
	}
	await answer.findByIdAndDelete(id);
	res.status(200).json({ status: 200, message: "Answer deleted", data: answer});
};
