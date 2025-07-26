const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  DeleteProduct,
} = require("../controlllers/productcontroller");
const { isAuth, isAdmin } = require("../middlewares/authMiddlewares");

const productRoutes = express.Router();

productRoutes.get("/products", isAuth, getAllProducts);

productRoutes.get("/products/:id", getProductById);

productRoutes.post("/products", isAuth, isAdmin, createProduct);

productRoutes.put("/products/:id", isAuth, isAdmin, updateProduct);

productRoutes.delete("/products/:id", isAuth, isAdmin, DeleteProduct);

module.exports = productRoutes;
