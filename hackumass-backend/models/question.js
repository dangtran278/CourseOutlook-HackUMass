import mongoose from "mongoose";
import Answer from "./answer.js";

const questionSchema = new mongoose.Schema(
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
		answer: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Answer",
			},
		],
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

questionSchema.post("findOneAndDelete", async function (doc) {
	if (doc) {
		await Answer.deleteMany({
			_id: doc.answers,
		});
	}
});

export default mongoose.model("Question", questionSchema);
