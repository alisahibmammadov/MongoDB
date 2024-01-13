const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://alisahib:alisahib@cluster0.hpksjxu.mongodb.net/products-test";
const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log("Connected to the database");
    const db = client.db();
    const result = await db.collection("products").insertOne(newProduct);
    console.log("Product inserted:", result.insertedId);
  } catch (error) {
    return res.json({ message: "Could not store data." });
  } finally {
    await client.close();
  }
  res.json(newProduct);
};
const getProducts = async (req, res, next) => {
  const client = new MongoClient(url);
  let products;
  try {
    await client.connect();
    const db = client.db();
    products = await db.collection("products").find().toArray();
  } catch (error) {
    return res.json({ message: "Could not retrieve products." });
  }
  client.close();
  res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
