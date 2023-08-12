import { doctorDao } from "../daos/doctor.dao.js";

const getAllDoctors = async () => {
  const data = await doctorDao.getAllDoctors();
  return data;
};

const createDoctor = async ({
  name,
  lastName,
  especialist,
  dateBird,
  phone,
  email,
}) => {
  if (typeof name !== "string") throw "name error type: must be string";
  if (typeof lastName !== "string") throw "lastName error type: must be string";
  if (typeof especialist !== "string")
    throw "especialist error type: must be string";
  if (typeof dateBird !== "string") throw "dateBird error type: must be string";
  if (typeof phone !== "string") throw "phone error type: must be string";
  if (typeof email !== "string") throw "email error type: must be string";

  const createdDoctor = await doctorDao.createDoctor({
    name,
    lastName,
    especialist,
    dateBird,
    phone,
    email,
  });
  return createdDoctor;
};

const getDoctorById = async (doctorId) => {
  if (typeof doctorId !== "string") throw "doctorId error type: must be string";

  const doctor = await doctorDao.getDoctorById(doctorId);

  if (!doctor) throw "doctor id doesn't exist";

  return doctor;
};

const updateDoctor = async (
  doctorId,
  { name, lastName, especialist, dateBird, phone, email }
) => {
  if (typeof name !== "string") throw "name error type: must be string";
  if (typeof lastName !== "string") throw "lastName error type: must be string";
  if (typeof especialist !== "string")
    throw "especialist error type: must be string";
  if (typeof dateBird !== "string") throw "dateBird error type: must be string";
  if (typeof phone !== "string") throw "phone error type: must be string";
  if (typeof email !== "string") throw "email error type: must be string";

  const updatedDoctor = await doctorDao.updateDoctor(doctorId, {
    name,
    lastName,
    especialist,
    dateBird,
    phone,
    email,
  });
  return updatedDoctor;
};

const deleteDoctor = async (doctorId) => {
  if (typeof doctorId !== "string") throw "doctorId error type: must be string";
  await doctorDao.deleteDoctor(doctorId);
};

export const doctorService = {
  getAllDoctors,
  createDoctor,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
};
