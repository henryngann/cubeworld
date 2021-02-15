require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const {
  getProductById,
  getProducts,
} = require("./controller/productControllers");

connectDB();

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});
app.use("/api/product/:id", getProductById);
app.use("/api/products", getProducts);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
