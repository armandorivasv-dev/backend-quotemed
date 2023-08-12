import { Patient } from "../models/patient.model.js";

const getAllPatients = async () => {
  const patients = await Patient.find();
  return patients;
};

const createPatient = async (patientToCreate) => {
  const createdPatient = await Patient.create(patientToCreate);

  return createdPatient;
};

const getPatientById = async (patientId) => {
  const patient = await Patient.findById(patientId);
  return patient;
};

const updatePatient = async (patientId, patientUpdate) => {
  const updatedPatient = await Patient.updateOne(
    { _id: patientId },
    patientUpdate
  );
  return updatedPatient;
};

const deletePatient = async (patientId) => {
  await Patient.deleteOne({ _id: patientId });
};

export const patientDao = {
  getAllPatients,
  createPatient,
  getPatientById,
  updatePatient,
  deletePatient,
};
