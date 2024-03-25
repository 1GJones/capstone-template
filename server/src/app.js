import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes";
import keys from "./config/keys";
import {yellow,green,blue,red}from "chalk"

mongoose.connect(keys.db_uri)
    .then(() => console.log(`${green("[Database]")} Connection established.`))
    .catch((err) => 
    console.log(`${red("[Database]")} Connection failed: `, err))

    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(keys.api_url, router)

   app.listen(keys.port, () => 
   console.log(`${green}[Server] Listening for requests at${yellow( 
    "http://localhost:"
    )}${blue(keys.port)} `
   )
   );