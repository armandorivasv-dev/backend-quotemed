// import { Product } from "../models/product.model.js";

// const getAllProducts = async () => {
//   const products = await Product.find();
//   return products;
// };

// const createProduct = async (productToCreate) => {
//   const createdProduct = await Product.create(productToCreate);

//   return createdProduct;
// };

// const getProductById = async (productId) => {
//   const product = await Product.findById(productId);
//   return product;
// };

// const updateProduct = async (productUpdate, productId) => {
//   const updatedProduct = await Product.updateOne(
//     { _id: productId },
//     productUpdate
//   );
//   return updatedProduct;
// };

// const deleteProduct = async (productId) => {
//   await Product.deleteOne({ _id: productId });
// };

// export const productDao = {
//   getAllProducts,
//   createProduct,
//   getProductById,
//   updateProduct,
//   deleteProduct,
// };
