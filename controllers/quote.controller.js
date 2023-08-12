import { WSresponse } from "../libs/WSresponse.js";
import { quoteService } from "../services/index.js";

const getAllQuotes = async (req, res) => {
  try {
    const response = await quoteService.getAllQuotes();

    res.json(new WSresponse(response, "succes"));
  } catch (error) {
    console.log("error", error);
    res
      .status(500)
      .json(new WSresponse(null, "Error: Internal server error", true, 500));
  }
};

const createQuote = async (req, res) => {
  try {
    const response = await quoteService.createQuote(req.body);
    res.json(new WSresponse(response, "quote create", false, 0));
  } catch (error) {
    console.log("error", error);
    res.status(400).json(new WSresponse(null, error, true, 400));
  }
};

const getQuoteById = async (req, res) => {
  try {
    const response = await quoteService.getQuoteById(req.params.id);
    res.json(new WSresponse(response, "succes"));
  } catch (error) {
    console.log("error", error);
    res.status(460).json(new WSresponse(null, error, true, 460));
  }
};

const updateQuote = async (req, res) => {
  try {
    const response = await quoteService.updateQuote(req.params.id, req.body);
    res.json(new WSresponse(response, "quote updated"));
  } catch (error) {
    console.log("error", error);
    res.status(489).json(new WSresponse(null, error, true, 489));
  }
};

const deleteQuote = async (req, res) => {
  try {
    const response = await quoteService.deleteQuote(req.params.id);
    res.json(new WSresponse(response, "quote deleted"));
  } catch (error) {
    console.log("error", error);
    res.status(320).json(new WSresponse(null, error, true, 320));
  }
};

export const quoteController = {
  getAllQuotes,
  createQuote,
  getQuoteById,
  updateQuote,
  deleteQuote,
};
