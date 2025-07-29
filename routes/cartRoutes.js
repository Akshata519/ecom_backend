const express = require("express");
const {
  getCart,
  addToCart,
  clearCart,
  updateQuntity,
  removeFromCart,
} = require("../controlllers/cartControllers");
const { isAuth } = require("../middlewares/authMiddlewares");

const cartRoutes = express.Router();

cartRoutes.get("/cart", isAuth, getCart);

cartRoutes.post("/cart/add", isAuth, addToCart);

cartRoutes.delete("/cart", isAuth, clearCart);

cartRoutes.put("/cart", isAuth, updateQuntity);

cartRoutes.delete("/cart/product", isAuth, removeFromCart);

module.exports = cartRoutes;
