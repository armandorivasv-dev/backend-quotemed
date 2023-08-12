import { quoteDao } from "../daos/quote.dao.js";

const getAllQuotes = async () => {
  const data = await quoteDao.getAllQuotes();
  return data;
};

const createQuote = async ({
  type,
  description,
  result,
  diagnostic,
  status,
  location,
  idDoctor,
  idPatient,
}) => {
  if (typeof type !== "string") throw "type error type: must be string";
  if (typeof description !== "string")
    throw "description error type: must be string";
  if (typeof result !== "string") throw "result error type: must be string";
  if (typeof diagnostic !== "string")
    throw "diagnostic error type: must be string";
  if (typeof status !== "string") throw "status error type: must be string";
  if (typeof location !== "string") throw "location error type: must be string";
  if (typeof idDoctor !== "string") throw "idDoctor error type: must be string";
  if (typeof idPatient !== "string")
    throw "idPatient error type: must be string";

  let today = new Date();

  const createdQuote = await quoteDao.createQuote({
    createAt: today,
    type,
    description,
    result,
    diagnostic,
    status,
    location,
    idDoctor,
    idPatient,
  });
  return createdQuote;
};

const getQuoteById = async (quoteId) => {
  if (typeof quoteId !== "string") throw "quoteId error type: must be string";

  const quote = await quoteDao.getQuoteById(quoteId);

  if (!quote) throw "quote id doesn't exist";

  return quote;
};

const updateQuote = async (
  {
    type,
    description,
    result,
    diagnostic,
    status,
    location,
    idDoctor,
    idPatient,
  },
  quoteId
) => {
  if (typeof type !== "string") throw "type error type: must be string";
  if (typeof description !== "string")
    throw "description error type: must be string";
  if (typeof result !== "string") throw "result error type: must be string";
  if (typeof diagnostic !== "string")
    throw "diagnostic error type: must be string";
  if (typeof status !== "string") throw "status error type: must be string";
  if (typeof location !== "string") throw "location error type: must be string";
  if (typeof idDoctor !== "string") throw "idDoctor error type: must be string";
  if (typeof idPatient !== "string")
    throw "idPatient error type: must be string";

  let today = new Date();

  const updatedQuote = await quoteDao.updateQuote(quoteId, {
    updateAt: today,
    type,
    description,
    result,
    diagnostic,
    status,
    location,
    idDoctor,
    idPatient,
  });
  return updatedQuote;
};

const deleteQuote = async (quoteId) => {
  if (typeof quoteId !== "string") throw "quoteId error type: must be string";
  await quoteDao.deleteQuote(quoteId);
};

export const quoteService = {
  getAllQuotes,
  createQuote,
  getQuoteById,
  updateQuote,
  deleteQuote,
};
