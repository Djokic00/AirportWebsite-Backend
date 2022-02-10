import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRouter.js";
import path from "path"

// mozemo da koristimo import zato sto smo ubacil "type": "module" u package.json

dotenv.config();
const app = express();



app.use(cors());

app.use(express.json({ limit: "30mb", extended: true }));

app.use("/admin", userRoutes);


const PORT = process.env.PORT || 8080;
mongoose
    .connect(process.env.DATABASE_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
    )
    .catch((error) => console.log(error.message));


