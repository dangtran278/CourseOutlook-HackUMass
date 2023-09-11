import Course from "../models/course.js";

import { ExpressError } from "../utils/index.js";

export const createCourse = async (req, res, next) => {
	const { fullName, codeName, major, description } = req.body;
	const course = new Course({
		fullName: fullName.toLowerCase(),
		codeName: codeName.toLowerCase(),
		major: major.toLowerCase(),
		description,
	});
	await course.save();
	res.status(200).json({ status: 200, message: "Course created", data: course });
};

export const readCourse = async (req, res, next) => {
	const { codeName } = req.params;
	const course = await Course.find({ codeName });
	if (course.length === 0) {
		throw new ExpressError("Course not found", 404);
	}
	res.status(200).json({ status: 200, message: "", data: course[0] });
};

export const readAllCourses = async (req, res, next) => {
	const courses = await Course.find({});
	res.status(200).json({ status: 200, message: "", data: courses || [] });
};

export const updateCourse = async (req, res, next) => {
	const { fullName, codeName, major, description } = req.body;
	const course = await Course.find({ codeName: codeName.toLowerCase() });
	if (course.length === 0) {
		throw new ExpressError("Course not found", 404);
	}
	await course.updateOne({
		fullName: fullName.toLowerCase(),
		codeName: codeName.toLowerCase(),
		major: major.toLowerCase(),
		description,
	});
	await course.save();
	res.status(200).json({ status: 200, message: "Course updated", data: course[0] });
};

export const deleteCourse = async (req, res, next) => {
	const { codeName } = req.body;
	const course = await Course.find({ codeName: codeName.toLowerCase() });
	if (course.length === 0) {
		throw new ExpressError("Course not found", 404);
	}
	await Course.deleteOne({ codeName: codeName.toLowerCase() });
	res.status(200).json({ status: 200, message: "Course updated", data: course[0] });
};
