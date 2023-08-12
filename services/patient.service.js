import { patientDao } from "../daos/patient.dao.js";

const getAllPatients = async () => {
  const data = await patientDao.getAllPatients();
  return data;
};

const createPatient = async ({
  name,
  lastName,
  address,
  dateBird,
  phone,
  email,
  allergies,
  diseases,
}) => {
  if (typeof name !== "string") throw "name error type: must be string";
  if (typeof lastName !== "string") throw "lastName error type: must be string";
  if (typeof address !== "string") throw "address error type: must be string";
  if (typeof dateBird !== "string") throw "dateBird error type: must be string";
  if (typeof phone !== "string") throw "phone error type: must be string";
  if (typeof email !== "string") throw "email error type: must be string";
  if (typeof allergies !== "string")
    throw "allergies error type: must be string";
  if (typeof diseases !== "string") throw "diseases error type: must be string";

  const createdPatient = await patientDao.createPatient({
    name,
    lastName,
    address,
    dateBird,
    phone,
    email,
    allergies,
    diseases,
  });
  return createdPatient;
};

const getPatientById = async (patientId) => {
  if (typeof patientId !== "string")
    throw "patientId error type: must be string";

  const patient = await patientDao.getPatientById(patientId);

  if (!patient) throw "patient id doesn't exist";

  return patient;
};

const updatePatient = async (
  patientId,
  { name, lastName, address, dateBird, phone, email, allergies, diseases }
) => {
  if (typeof name !== "string") throw "name error type: must be string";
  if (typeof lastName !== "string") throw "lastName error type: must be string";
  if (typeof address !== "string") throw "address error type: must be string";
  if (typeof dateBird !== "string") throw "dateBird error type: must be string";
  if (typeof phone !== "string") throw "phone error type: must be string";
  if (typeof email !== "string") throw "email error type: must be string";
  if (typeof allergies !== "string")
    throw "allergies error type: must be string";
  if (typeof diseases !== "string") throw "diseases error type: must be string";
  if (typeof patientId !== "string")
    throw "patientId error type: must be string";

  const updatedPatient = await patientDao.updatePatient(patientId, {
    name,
    lastName,
    address,
    dateBird,
    phone,
    email,
    allergies,
    diseases,
  });
  return updatedPatient;
};

const deletePatient = async (patientId) => {
  if (typeof patientId !== "string")
    throw "patientId error type: must be string";
  await patientDao.deletePatient(patientId);
};

export const patientService = {
  getAllPatients,
  createPatient,
  getPatientById,
  updatePatient,
  deletePatient,
};
