import userModel from "../models/userModel.js";
import Joi from "joi";

const schema = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().email({ minDomainAtoms: 2 }).required(),
    username: Joi.string().min(4).max(12).required(),
    password: Joi.string().min(4).max(15).required()
});

//export const validateRegister = async (fullName, username, password, email, role, response) => {
export const validateInput = async (request, response) => {
    const {username} = request.body;
    if (await isUsernameTaken(username)) {
        response.status(400).json({ message: "Request failed, username is already in use" });
        return false;
    }
    Joi.validate(request.body, schema, (err, result) => {
        if (err) {
            response.status(400).send(err.details);
        }
        else {
            console.log(result)
        }
    });
    return true;
}

const isUsernameTaken = async (username) => {
    return userModel.findOne({username: username});
}