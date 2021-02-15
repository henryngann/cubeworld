const Product = require("../model/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}, {}, { limit: 100, skip: 500 });
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    console.log(product, "this is being hit");
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
//MyModel.find(query, fields, { skip: 10, limit: 5 }, function(err, results) { ... });
module.exports = {
  getProducts,
  getProductById,
};
