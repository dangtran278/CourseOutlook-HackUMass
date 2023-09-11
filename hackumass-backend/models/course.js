import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
			unique: true,
		},
		codeName: {
			type: String,
			required: true,
			unique: true,
		},
		major: {
			type: String,
			required: true,
		},
		rating: {
			type: Number,
		},
		description: String,
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Course", courseSchema);
