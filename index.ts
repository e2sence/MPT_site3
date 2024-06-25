


import express, { Router, Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from 'path'

/** routes */
import home from "./routes/home"

dotenv.config();
const app: Express = express();

app.use(express.static(path.join(__dirname, '/public/styles')))
app.use(express.static(path.join(__dirname, '/public/images')))
app.use(express.static(path.join(__dirname, '/dist')))
app.use('/', home)

/** server */
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});