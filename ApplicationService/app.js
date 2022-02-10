import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";
import path from 'path'

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/admin", routes);

const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, '../../airport-frontend/dist')));
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, '../airport-frontend/dist/index.html' ));
// })

app.use(express.static(path.join(__dirname, "static")));

const PORT = 8081;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
