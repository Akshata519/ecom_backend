const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  DeleteProduct,
} = require("../controlllers/productcontroller");

const productRoutes = express.Router();

productRoutes.get("/products", getAllProducts);

productRoutes.get("/products/:id", getProductById);

productRoutes.post("/products", createProduct);

productRoutes.put("/products/:id", updateProduct);

productRoutes.delete("/products/:id", DeleteProduct);

module.exports = productRoutes;
