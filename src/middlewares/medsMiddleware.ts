import { Request, Response, NextFunction } from "express";
import { CreateMedicationData } from "../repositories/medsRepository.js";
import { createSchema, sortSchema } from "../schemas/mesSchema.js";

export async function validateCreateData(req: Request, res: Response, next: NextFunction) {
    const data: CreateMedicationData = req.body;

    const { error } = createSchema.validate(data, {abortEarly: false});

    if (error) return res.status(422).send(error.details.map((detail) => detail.message));

    next();
}

export async function validateSortData(req: Request, res: Response, next: NextFunction) {
    const { field } : { field: string} = req.body;

    const { error } = sortSchema.validate({field}, {abortEarly: false});

    if (error) return res.status(422).send(error.details.map((detail) => detail.message));

    next();
}