import joi from "joi";
import { CreateMedicationData } from "../repositories/medsRepository.js";

export const createSchema  = joi.object<CreateMedicationData>({
    lab: joi.string().required(),
    registration: joi.number().integer().required(),
    presentation: joi.string().required(),
    manufacturerPrice: joi.number().required(),
    consumerPrice: joi.number().required()
});

export const sortSchema  = joi.object({
    field: joi.string().required().valid("registration", "manufacturerPrice", "consumerPrice")
});