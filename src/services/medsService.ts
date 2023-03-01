import { CreateMedicationData, medsRepository } from "../repositories/medsRepository.js";

// async function findAll() {
//     const meds = await medsRepository.findAll();

//     if (meds.length !== 0) return meds;
//     else return null;
// }

async function checkMed(registration: number) {
    const dbRegistration = await medsRepository.findByRegistration(registration);
    if (dbRegistration.length !== 0) return true;
    return false;
}

async function insert(medsData: CreateMedicationData) {
    const dbRegistration = await checkMed(medsData.registration);
    if (!dbRegistration) medsRepository.insert(medsData);
}

// async function remove(code: number) {
//     medsRepository.remove(code);
// }

export const medsService = {
    insert
}