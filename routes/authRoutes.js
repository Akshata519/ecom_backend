const express = require("express");
const { register, login, logout } = require("../controlllers/authController");

const authRoutes = express.Router();

authRoutes.post("/register", register);

authRoutes.post("/login", login);

authRoutes.get("/logout", logout);

module.exports = authRoutes;
