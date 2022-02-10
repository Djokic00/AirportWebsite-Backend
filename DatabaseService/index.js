import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/routes.js";

dotenv.config();
const app = express();

app.use(cors()); // nzm cemu sluzi

app.use(express.json({ limit: "30mb", extended: true }));

app.use("/admin", routes);

const PORT = process.env.PORT || 8082;
mongoose
    .connect(process.env.DATABASE_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        // ako se konektovao onda slusa na portu i ispisuje
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
    )
    .catch((error) => console.log(error.message));


