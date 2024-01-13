const express = require("express");
const bodyParser = require("body-parser");
const mondoPratice = require("./mongo");
const app = express();

app.use(bodyParser.json());
app.post("/products", mondoPratice.createProduct);
app.get("/products", mondoPratice.getProducts);

app.listen(4000);
