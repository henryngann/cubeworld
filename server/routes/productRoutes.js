const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProductById,
} = require("../controller/productControllers");

//Get all products
//get /api/products
//public access
router.get("/", getProducts);
//Get a product by id from db
//Get /api/products/:id
//public access
//router.get("/", getProductById);

module.exports = router;
