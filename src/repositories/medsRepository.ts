import { connection } from "../config/db.js";

export interface Medication {
    id: number,
    lab: string,
    registration: number,
    presentation: string,
    manufacturerPrice: number,
    consumerPrice: number
} 

export type CreateMedicationData = Omit<Medication, "id">;

async function findAll() {
    const result = await connection.query<Medication, []>(`SELECT * FROM medication`);
    return result.rows;
}

async function findByRegistration(registration: number) {
    const result = await connection.query<Medication>(`SELECT * FROM medication WHERE registration = $1`, [registration]);
    return result.rows;
}

async function insert(data: CreateMedicationData) {
   return await connection.query(`INSERT INTO medication (lab, registration, presentation, "manufacturerPrice", "consumerPrice") 
                      VALUES ($1, $2, $3, $4, $5)`, [data.lab, data.registration, data.presentation, data.manufacturerPrice, data.consumerPrice]);
}

async function remove(registration: number) {
    return await connection.query(`DELETE FROM medication WHERE registration = $1`, [registration]);
}

export const medsRepository = {
    findAll,
    findByRegistration,
    insert,
    remove
}