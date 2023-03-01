import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import "express-async-errors";
import medsRouter from "../routes/medsRouter.js";
import { errorHandler } from "../middlewares/errorMiddleware.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(json());

app.use(medsRouter);
app.use(errorHandler);

export default app;

