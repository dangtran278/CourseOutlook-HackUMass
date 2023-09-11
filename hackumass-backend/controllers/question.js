import Course from "../models/course.js";
import Question from "../models/question.js";
import User from "../models/users.js";

import { ExpressError } from "../utils/index.js";

export const getQuestionsByCourse = async (req, res, next) => {
	const { course } = req.query;
	const questions = await Question.find({ course });
	res.status(200).json({ status: 200, message: "", data: questions || [] });
};

export const createQuestion = async (req, res, next) => {
	const { title, content, course, user } = req.body;
	const foundUser = await User.findById(user);
	if (!foundUser) {
		throw new ExpressError("User not found", 404);
	}
	const foundCourse = await Course.findById(course);
	if (!foundCourse) {
		throw new ExpressError("Course not found", 404);
	}
	const question = new Question({ title, content, course, user });
	await question.save();
	res.status(200).json({ status: 200, message: "Question created", data: question });
};

export const readQuestion = async (req, res, next) => {
	const { questionId } = req.params;
	const question = await Question.findById(questionId);
	if (!question) {
		throw new ExpressError("Question not found", 404);
	}
	res.status(200).json({ status: 200, message: "", data: question });
};

export const updateRating = async (req, res, next) => {
	const { id, upvote, downvote } = req.body;
	const question = await Question.find({ _id: id });
	if (question.length === 0) {
		throw new ExpressError("Question not found", 404);
	}
	await question.updateOne({ upvote, downvote });
	await question.save();
	res.status(200).json({ status: 200, message: "Question rating updated", data: question[0] });
};

export const updateQuestion = async (req, res, next) => {
	const { id, title, content } = req.body;
	const question = await Question.find({ _id: id });
	if (question.length === 0) {
		throw new ExpressError("Question not found", 404);
	}
	await question.updateOne({ title, content });
	await question.save();
	res.status(200).json({ status: 200, message: "Question updated", data: question[0] });
};

export const deleteQuestion = async (req, res, next) => {
	const { id } = req.body;
	const question = await Question.find({ _id: id });
	if (question.length === 0) {
		throw new ExpressError("Question not found", 404);
	}
	await question.findByIdAndDelete(id);
	res.status(200).json({ status: 200, message: "Question updated", data: question[0] });
};
