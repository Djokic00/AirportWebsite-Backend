import express from "express";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.get("/", (request, response) => {
    response.sendFile("index.html", { root: "./static" });
});

router.get("/login", (request, response) => {
    response.sendFile("login.html", { root: "./static" });
});

router.get("/flight", (request, response) => {
    response.sendFile("flight.html", { root: "./static" });
});

router.get("/cargo", (request, response) => {
    response.sendFile("cargo.html", { root: "./static" });
});

router.get("/rentACar", (request, response) => {
    response.sendFile("rentACar.html", { root: "./static" });
});

router.get("/user", (request, response) => {
    response.sendFile("user.html", { root: "./static" });
});

export default router;
