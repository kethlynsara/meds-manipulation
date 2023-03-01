import { Request, Response } from "express";
import { medsService } from "../services/medsService.js";
import { CreateMedicationData } from "../repositories/medsRepository.js";

export async function sort(req: Request, res: Response) {
    const { field } : { field: string } = req.body;
    const meds = await medsService.sort(field);    
    res.send(meds);
}

export async function insert(req: Request, res: Response) {
    const data: CreateMedicationData = req.body;
    await medsService.insert(data);
    res.sendStatus(201);
}

export async function remove(req: Request, res: Response){
    const { code } = req.params;
    await medsService.remove(parseInt(code));
    res.sendStatus(204);
}