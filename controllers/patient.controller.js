import { WSresponse } from "../libs/WSresponse.js";
import { patientService } from "../services/index.js";

const getAllPatients = async (req, res) => {
  try {
    const response = await patientService.getAllPatients();

    res.json(new WSresponse(response, "succes"));
  } catch (error) {
    console.log("error", error);
    res
      .status(500)
      .json(new WSresponse(null, "Error: Internal server error", true, 500));
  }
};

const createPatient = async (req, res) => {
  try {
    const response = await patientService.createPatient(req.body);
    res.json(new WSresponse(response, "patient create", false, 0));
  } catch (error) {
    console.log("error", error);
    res.status(400).json(new WSresponse(null, error, true, 400));
  }
};

const getPatientById = async (req, res) => {
  try {
    const response = await patientService.getPatientById(req.params.id);
    res.json(new WSresponse(response, "succes"));
  } catch (error) {
    console.log("error", error);
    res.status(460).json(new WSresponse(null, error, true, 460));
  }
};

const updatePatient = async (req, res) => {
  try {
    const response = await patientService.updatePatient(
      req.params.id,
      req.body
    );
    res.json(new WSresponse(response, "patient updated"));
  } catch (error) {
    console.log("error", error);
    res.status(489).json(new WSresponse(null, error, true, 489));
  }
};

const deletePatient = async (req, res) => {
  try {
    const response = await patientService.deletePatient(req.params.id);
    res.json(new WSresponse(response, "patient deleted"));
  } catch (error) {
    console.log("error", error);
    res.status(320).json(new WSresponse(null, error, true, 320));
  }
};

export const patientController = {
  getAllPatients,
  createPatient,
  getPatientById,
  updatePatient,
  deletePatient,
};
