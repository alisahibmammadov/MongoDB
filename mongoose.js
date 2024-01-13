const mongoose = require("mongoose");
const Product = require("./models/product");
const url =
  "mongodb+srv://alisahib:alisahib@cluster0.hpksjxu.mongodb.net/products-test";
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to Database!");
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const result = await createdProduct.save();
  res.json(result);
};
const getProduct = async (req, res, next) => {
  const products = await Product.find();
  res.json(products);
};

exports.createProduct = createProduct;
exports.getProduct = getProduct;
