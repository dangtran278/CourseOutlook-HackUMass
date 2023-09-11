import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
	{
		content: {
			type: String,
			required: true,
		},
		// course: {
		// 	type: mongoose.Schema.Types.ObjectId,
		// 	ref: "Course",
		// },
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		question: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Question",
		},
		upvote: {
			type: Number,
			default: 0,
		},
		downvote: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Answer", answerSchema);
