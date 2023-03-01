import { Router } from "express";
import { insert, remove, sort } from "../controllers/medsController.js";
import { validateCreateData, validateSortData } from "../middlewares/medsMiddleware.js";

const medsRouter = Router();

medsRouter.post("/meds", validateSortData, sort);
medsRouter.post("/", validateCreateData, insert);
medsRouter.delete("/meds/:code", remove);

export default medsRouter;