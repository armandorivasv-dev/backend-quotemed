import { medicineDao } from "../daos/medicine.dao.js";

const getAllMedicines = async () => {
  const data = await medicineDao.getAllMedicines();
  return data;
};

const createMedicine = async ({ name, type, description, dose, frequency }) => {
  if (typeof name !== "string") throw "name error type: must be string";
  if (typeof type !== "string") throw "type error type: must be string";
  if (typeof description !== "string")
    throw "description error type: must be string";
  if (typeof dose !== "string") throw "dose error type: must be string";
  if (typeof frequency !== "string")
    throw "frequency error type: must be string";

  const createdMedicine = await medicineDao.createMedicine({
    name,
    type,
    description,
    dose,
    frequency,
  });
  return createdMedicine;
};

const getMedicineById = async (medicineId) => {
  if (typeof medicineId !== "string")
    throw "medicineId error type: must be string";

  const medicine = await medicineDao.getMedicineById(medicineId);

  if (!medicine) throw "medicine id doesn't exist";

  return medicine;
};

const updateMedicine = async (
  medicineId,
  { name, type, description, dose, frequency }
) => {
  if (typeof name !== "string") throw "name error type: must be string";
  if (typeof type !== "string") throw "type error type: must be string";
  if (typeof description !== "string")
    throw "description error type: must be string";
  if (typeof dose !== "string") throw "dose error type: must be string";
  if (typeof frequency !== "string")
    throw "frequency error type: must be string";

  const updatedMedicine = await medicineDao.updateMedicine(medicineId, {
    name,
    type,
    description,
    dose,
    frequency,
  });
  return updatedMedicine;
};

const deleteMedicine = async (medicineId) => {
  if (typeof medicineId !== "string")
    throw "medicineId error type: must be string";
  await medicineDao.deleteMedicine(medicineId);
};

export const medicineService = {
  getAllMedicines,
  createMedicine,
  getMedicineById,
  updateMedicine,
  deleteMedicine,
};
