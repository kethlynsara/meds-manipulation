import { Router } from "express";
import { insert, remove, sort } from "../controllers/medsController.js";

const medsRouter = Router();

medsRouter.post("/meds", sort);
medsRouter.post("/", insert);
medsRouter.delete("/meds/:code", remove);

export default medsRouter;