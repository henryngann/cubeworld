require("dotenv").config();

const productsData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./model/Product");

connectDB();

// let product = new Product({
//   set_number: data.data[0].set_number,
//   set_name: data.data[0].set_name,
// });
const importData = async () => {
  try {
    await Product.deleteMany({});

    const data = await productsData.api.getProducts();
    await Product.insertMany(data.data);
    console.log("Data Import Success");
    process.exit(1);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importData();
