const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  set_number: {
    type: String,
    required: false,
  },
  set_name: {
    type: String,
    required: false,
  },
  set_year: {
    type: Number,
    required: false,
  },
  price_new: {
    type: String,
    required: false,
  },
  sold_sets_new: {
    type: String,
    required: false,
  },
  price_used: {
    type: String,
    required: false,
  },
  sold_sets_used: {
    type: String,
    required: false,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
