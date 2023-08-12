import { Quote } from "../models/quote.model.js";

const getAllQuotes = async () => {
  const quotes = await Quote.find();
  return quotes;
};

const createQuote = async (quoteToCreate) => {
  const createdQuote = await Quote.create(quoteToCreate);

  return createdQuote;
};

const getQuoteById = async (quoteId) => {
  const quote = await Quote.findById(quoteId);
  return quote;
};

const updateQuote = async (quoteId, quoteUpdate) => {
  const updatedQuote = await Quote.updateOne({ _id: quoteId }, quoteUpdate);
  return updatedQuote;
};

const deleteQuote = async (quoteId) => {
  await Quote.deleteOne({ _id: quoteId });
};

export const quoteDao = {
  getAllQuotes,
  createQuote,
  getQuoteById,
  updateQuote,
  deleteQuote,
};
