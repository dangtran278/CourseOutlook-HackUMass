import mongoose, { Schema } from "mongoose";
const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		major: {
			type: String,
			required: true,
		},
		upvote: {
			type: Number,
			default: 0,
		},
		downvote: {
			type: Number,
			default: 0,
		},
		courseTaken: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Course",
			},
		],
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("User", userSchema);
