import { OAuth2Client } from 'google-auth-library';
import User from "../models/users.js";
import jwt from 'jsonwebtoken';
const client = new OAuth2Client("868855841872-sc6bivb284l92isq1r9cude5fqhkt149.apps.googleusercontent.com");

const generateAccessToken = (user) => {
    return jwt.sign({ _id: user._id }, process.env.JWT_ACCESS_TOKEN_SECRET, { expiresIn: '7d' });
}

export const googleLoginUser = async (req, res) => {
    try
    {
        const { idToken } = req.body;
        const data = await client.verifyIdToken({ idToken: idToken, audience: "868855841872-sc6bivb284l92isq1r9cude5fqhkt149.apps.googleusercontent.com" });
        const payload = data.payload;
        const { email_verified, email } = payload;
        if (email_verified)
        {
            const foundUser = await User.findOne({ email: email });
            if (foundUser)
            {
                //Log in
                const accessToken = generateAccessToken(foundUser);

                res.status(200).json({
                    status: 200, message: "Logged in successfully!", data: {
                        token: accessToken,
                } });
            } else
            {
                //Create new user
                let newUser = new User({
                    username: email,
                    email: email,
                    major: "Computer Science",
                    courseTaken: [],
                });
                const savedUser = await newUser.save();
                const accessToken = generateAccessToken(savedUser);
                res.status(200).json({
                    status: 200, message: "Logged in successfully!", data: {
                        token: accessToken,
                    }
                });
            }
        } else
        {
            res.send({
                success: false,
                message: "Email does not existed",
            });
        }
    } catch (err)
    {
        console.log(err);
    }
}