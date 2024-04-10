import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { API_URL, DB_URL, PORT } from "./config/keys";
import router from "./routes";
import path from "path"
import requestLogger from "./middleware/logger";

mongoose
.connect(DB_URL)
.then(() => console.log("[Database] Connection established."))
.catch((err) => console.log("[Database] Connection failed: ", err));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(API_URL, router);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")))
  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "../client/dist/index.html"))
  })
}

app.use(requestLogger)

app.listen(PORT, () =>
console.log(`[Server] Listening for requests at http://localhost:${PORT} `)
);

