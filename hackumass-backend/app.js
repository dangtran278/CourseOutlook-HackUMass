import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import { ExpressError } from "./utils/index.js";

import AnswerRouter from "./routers/answer.js";
import AuthRouter from "./routers/auth.js";
import CourseRouter from "./routers/course.js";
import QuestionRouter from "./routers/question.js";
import ReviewRouter from "./routers/review.js";

const app = express();

dotenv.config();
const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/hackumass-db";
const PORT = process.env.PORT || 5001;

// 'mongodb://localhost:27017/habits-tracker'
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
	console.log("Database connected");
});

app.listen(PORT, () => {
	console.log(`Serving on port ${PORT}`);
});

//bodyParser supports req.body
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

app.use("/api/course", CourseRouter);
app.use("/api/review", ReviewRouter);
app.use("/api/question", QuestionRouter);
app.use("/api/answer", AnswerRouter);
app.use("/api/auth", AuthRouter);

app.all("*", (req, res, next) => {
	next(new ExpressError("Page not found", 404));
});

app.use((err, req, res, next) => {
	const { statusCode = 500 } = err;
	if (!err.message) err.message = "Something went wrong!";
	res.status(statusCode);
	res.json({ status: statusCode, message: err.message });
});
