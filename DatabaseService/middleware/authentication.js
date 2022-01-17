import jwt from "jsonwebtoken";
import {ADMINISTRATOR, MODERATOR} from "../models/userTypes.js";
import {request} from "express";

export const authentication = (request, response, next) => {
    try {
        if (!request.headers.authorization) {
            response.status(400).json({message: "Token is missing"});
            return;
        }
        const token = request.headers.authorization.split(" ")[1];
        if (!token) {
            response.status(400).json({message: "error"});
            return;
        }
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        response.headers.userId = decodedToken.userId;
        response.headers.userType = decodedToken.userType;
        next();
    } catch (error) {
        response.status(500).json({message: error.message});
    }
}

export const checkIfAdmin = (request, response, next) =>{
    if (request.headers.userType !== ADMINISTRATOR){
        response.status(403).json({message: "Only administrator can perform this action"});
        return;
    }
    next();
}

export const checkRole = (request, response, next) =>{
    if (!(request.headers.userType === ADMINISTRATOR || request.headers.userType === MODERATOR)){
        response.status(403).json({message: "You don't have permission to perform this action"});
        return;
    }
    next();
}
