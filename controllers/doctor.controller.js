import { WSresponse } from "../libs/WSresponse.js";
import { doctorService } from "../services/index.js";

const getAllDoctors = async (req, res) => {
  try {
    const response = await doctorService.getAllDoctors();

    res.json(new WSresponse(response, "succes"));
  } catch (error) {
    console.log("error", error);
    res
      .status(500)
      .json(new WSresponse(null, "Error: Internal server error", true, 500));
  }
};

const createDoctor = async (req, res) => {
  try {
    const response = await doctorService.createDoctor(req.body);
    res.json(new WSresponse(response, "doctor create", false, 0));
  } catch (error) {
    console.log("error", error);
    res.status(400).json(new WSresponse(null, error, true, 400));
  }
};

const getDoctorById = async (req, res) => {
  try {
    const response = await doctorService.getDoctorById(req.params.id);
    res.json(new WSresponse(response, "succes"));
  } catch (error) {
    console.log("error", error);
    res.status(460).json(new WSresponse(null, error, true, 460));
  }
};

const updateDoctor = async (req, res) => {
  try {
    const response = await doctorService.updateDoctor(req.params.id, req.body);
    res.json(new WSresponse(response, "doctor updated"));
  } catch (error) {
    console.log("error", error);
    res.status(489).json(new WSresponse(null, error, true, 489));
  }
};

const deleteDoctor = async (req, res) => {
  try {
    const response = await doctorService.deleteDoctor(req.params.id);
    res.json(new WSresponse(response, "doctor deleted"));
  } catch (error) {
    console.log("error", error);
    res.status(320).json(new WSresponse(null, error, true, 320));
  }
};

export const doctorController = {
  getAllDoctors,
  createDoctor,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
};
