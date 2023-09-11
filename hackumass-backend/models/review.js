import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		course: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Course",
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		difficultyRating: {
			type: Number,
			default: 0,
		},
		timeSpentRating: {
			type: Number,
			default: 0,
		},
		funRating: {
			type: Number,
			default: 0,
		},
		recommendRating: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Review", reviewSchema);
