import { Request, Response } from "express";
import { medsService } from "../services/medsService.js";
import { CreateMedicationData } from "../repositories/medsRepository.js";

export async function getByCode(req: Request, res: Response) {
    const { code } = req.params;
    console.log('code: ', code, typeof code);
    res.send(code);
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