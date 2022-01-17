import {USER} from "../models/userTypes.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { validateInput } from "../validation/validation.js";

import * as Process from "process";

// kada imamo export default onda mozemo da koristimo samo import User
// a kada imamo export const onda moramo {} i mozemo da navodimo vise stvari kao {USER, MODERATOR, ...}

// Logika za sve funkcije

// da bi koristili await moramo da imamo async funkciju

export const register = async(request, response) => {
    const {fullName, email, username, password, role} = request.body; // dobijamo username i password iz request body
    //const validInput = await validateRegister(fullName, username, password, email, role, response);
    const validInput = await validateInput(request, response)
    if (!validInput) {
        //console.log("Ipak radi")
        return;
    }
    const hashPassword = await bcrypt.hash(password, 512); // prosledjujem osta hash-ujemo i po kom kljucu
    // to je nas User iz userModel
    const user = new User({
        fullName: fullName,
        email: email,
        username: username, // username koji smo dobili iz body
        password: hashPassword, // password hocemo da bude hashPassword
        userType: USER, // koji je tip, a za isBanned ne stavljamo nista jer je difoltno false
    });
    try {
        // takodje mora await jer su operacije sa bazom asinhrone
        const newUser = await user.save(); // save je iz mondodb i on ce sada da napravi usera u bazi
        // token sluzi za dalju validaciju, pisemo sta ce da se nalazi u tokenu
        const token = jwt.sign({
            userId: newUser._id, // userID ce mongoDB sam da napravi i ovo user._id je sintaksa za to
            userType: newUser.userType
        }, process.env.SECRET_KEY);
        // onaj sto je poslao request i ako se taj request izvrsio dobro onda ce on dobiti taj token
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
        response.send(400).json({message: error.details})
    }
}

// user.findOne funkcija vraca promise, a mi stavljamo await da vrati objekat

// POSTMAN ce da nam sluzi da testiramo rute dok ne napravimo frontend
// Koriscen je Online UUID Generator Tool za generisanje tokena
// User.findOne - koristimo User model jer on moze da radi sa bazom (nije mi bas jasno sta prica lik)