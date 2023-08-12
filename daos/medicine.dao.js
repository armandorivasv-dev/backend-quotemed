import { Medicine } from "../models/medicines.model.js";

const getAllMedicines = async () => {
  const medicines = await Medicine.find();
  return medicines;
};

const createMedicine = async (medicineToCreate) => {
  const createdMedicine = await Medicine.create(medicineToCreate);

  return createdMedicine;
};

const getMedicineById = async (medicineId) => {
  const medicine = await Medicine.findById(medicineId);
  return medicine;
};

const updateMedicine = async (medicineId, medicineUpdate) => {
  const updatedMedicine = await Medicine.updateOne(
    { _id: medicineId },
    medicineUpdate
  );
  return updatedMedicine;
};

const deleteMedicine = async (medicineId) => {
  await Medicine.deleteOne({ _id: medicineId });
};

export const medicineDao = {
  getAllMedicines,
  createMedicine,
  getMedicineById,
  updateMedicine,
  deleteMedicine,
};
