import { Router } from "express";
import { insert } from "../controllers/medsController.js";

const medsRouter = Router();

medsRouter.post("/meds", insert);

export default medsRouter;