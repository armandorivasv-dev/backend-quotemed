import { Doctor } from "../models/doctor.model.js";

const getAllDoctors = async () => {
  const doctors = await Doctor.find();
  return doctors;
};

const createDoctor = async (doctorToCreate) => {
  const createdDoctor = await Doctor.create(doctorToCreate);

  return createdDoctor;
};

const getDoctorById = async (doctorId) => {
  const doctor = await Doctor.findById(doctorId);
  return doctor;
};

const updateDoctor = async (doctorId, doctorUpdate) => {
  const updatedDoctor = await Doctor.updateOne({ _id: doctorId }, doctorUpdate);
  return updatedDoctor;
};

const deleteDoctor = async (doctorId) => {
  await Doctor.deleteOne({ _id: doctorId });
};

export const doctorDao = {
  getAllDoctors,
  createDoctor,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
};
