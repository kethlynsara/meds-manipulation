import { CreateMedicationData, medsRepository, Medication } from "../repositories/medsRepository.js";

async function findAll() {
    const meds = await medsRepository.findAll();

    if (meds.length !== 0) return meds;
    else return null;
}

async function checkMed(registration: number) {
    const dbRegistration = await medsRepository.findByRegistration(registration);
    if (dbRegistration.length !== 0) return true;
    return false;
}

async function shellSort(field: string, meds: Medication[]) {
    const size = meds.length;
    const gaps = [1, 4, 10, 23, 57, 132, 301, 701, 1750];
    let pos_gap = 8;

    while (gaps[pos_gap] > size) {
        pos_gap--;
    }

    let value: Medication;
    let j: number;
    while (pos_gap >= 0) {
        let gap = gaps[pos_gap];

        for (let i = 0; i < size; i++) {
            value = meds[i];
            j = i;

            if (field == "registration") {
                while ((j >= gap) && (value.registration < meds[j - gap].registration)) {
                    meds[j] = meds[j - gap];
                    j = j - gap;
                }
            } else if (field == "consumerPrice") {
                while ((j >= gap) && (value.consumerPrice < meds[j - gap].consumerPrice)) {
                    meds[j] = meds[j - gap];
                    j = j - gap;
                }
            } else if (field == "manufacturerPrice") {
                while ((j >= gap) && (value.manufacturerPrice < meds[j - gap].manufacturerPrice)) {
                    meds[j] = meds[j - gap];
                    j = j - gap;
                }
            }
            meds[j] = value;                
        }            
        pos_gap--;
    }
}

async function sort(field: string) {
    const meds = await findAll();
    if (meds.length !== 0) await shellSort(field, meds);
    return meds;
}

async function insert(medsData: CreateMedicationData) {
    const dbRegistration = await checkMed(medsData.registration);
    if (!dbRegistration) medsRepository.insert(medsData);
}

async function remove(code: number) {
    const dbRegistration = await checkMed(code)
    if (dbRegistration) medsRepository.remove(code);
}

export const medsService = {
    sort,
    insert,
    remove
}