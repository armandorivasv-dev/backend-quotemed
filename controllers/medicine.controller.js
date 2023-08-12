import { WSresponse } from "../libs/WSresponse.js";
import { medicineService } from "../services/index.js";

const getAllMedicines = async (req, res) => {
  try {
    const response = await medicineService.getAllMedicines();

    res.json(new WSresponse(response, "succes"));
  } catch (error) {
    console.log("error", error);
    res
      .status(500)
      .json(new WSresponse(null, "Error: Internal server error", true, 500));
  }
};

const createMedicine = async (req, res) => {
  try {
    const response = await medicineService.createMedicine(req.body);
    res.json(new WSresponse(response, "medicine create", false, 0));
  } catch (error) {
    console.log("error", error);
    res.status(400).json(new WSresponse(null, error, true, 400));
  }
};

const getMedicineById = async (req, res) => {
  try {
    const response = await medicineService.getMedicineById(req.params.id);
    res.json(new WSresponse(response, "succes"));
  } catch (error) {
    console.log("error", error);
    res.status(460).json(new WSresponse(null, error, true, 460));
  }
};

const updateMedicine = async (req, res) => {
  try {
    const response = await medicineService.updateMedicine(
      req.params.id,
      req.body
    );
    res.json(new WSresponse(response, "medicine updated"));
  } catch (error) {
    console.log("error", error);
    res.status(489).json(new WSresponse(null, error, true, 489));
  }
};

const deleteMedicine = async (req, res) => {
  try {
    const response = await medicineService.deleteMedicine(req.params.id);
    res.json(new WSresponse(response, "medicine deleted"));
  } catch (error) {
    console.log("error", error);
    res.status(320).json(new WSresponse(null, error, true, 320));
  }
};

export const medicineController = {
  getAllMedicines,
  createMedicine,
  getMedicineById,
  updateMedicine,
  deleteMedicine,
};
