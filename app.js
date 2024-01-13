const express = require("express");
const bodyParser = require("body-parser");
// const mongoPratice = require("./mongo");
const mongoPratice = require("./mongoose");
const app = express();

app.use(bodyParser.json());
app.post("/products", mongoPratice.createProduct);
app.get("/products", mongoPratice.getProduct);

app.listen(4000);
