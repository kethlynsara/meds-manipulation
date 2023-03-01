import { Router } from "express";
import { insert, remove } from "../controllers/medsController.js";

const medsRouter = Router();

medsRouter.post("/meds", insert);
medsRouter.delete("/meds/:code", remove);

export default medsRouter;