import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import medsRouter from "../routes/medsRouter.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(json());

app.use(medsRouter);

export default app;

