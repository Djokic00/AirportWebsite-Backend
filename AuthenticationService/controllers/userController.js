import {USER} from "../models/userTypes.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { validateInput } from "../validation/validation.js";


export const register = async(request, response) => {
    const {fullName, email, username, password, role} = request.body;

    const validInput = await validateInput(request, response)
    if (!validInput) {
        return;
    }
    const hashPassword = await bcrypt.hash(password, 512);

    const user = new User({
        fullName: fullName,
        email: email,
        username: username,
        password: hashPassword,
        userType: USER,
    });
    try {
        const newUser = await user.save();
        const token = jwt.sign({
            userId: newUser._id,
            userType: newUser.userType
        }, process.env.SECRET_KEY);
        response.status(200).json(`Bearer ${token}`);
    } catch(error) {
        response.status(400).json({message: error.message});
    }
}

export const login = async (request, response) => {
    const {username, password} = request.body;
    try {
        const user = await User.findOne({
            username: username
        });
        if (!user) {
            response.status(400).json({message: `User with ${username} does not exists`})
        }
        if (user.isBanned) {
            response.status(403).json({message: "You are banned"});
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            response.status(400).json({message: "Wrong password"});
        }
        const token = jwt.sign({
            userId: user._id,
            username: user.username,
            userType: user.userType
        }, process.env.SECRET_KEY)
        response.status(200).json(`Bearer ${token}`)
    } catch (error) {
        response.status(400).json({message: error.details})
    }
}

export const getAllUsers = async(request, response) => {
    try {
        const user = await User.find();
        if (!user) {
            response.status(400).json({ message: "Currently there are no users" });
            return;
        }
        response.status(200).json(user);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}