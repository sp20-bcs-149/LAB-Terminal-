const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
} = require("./productsOperations");

app.use(express.json());


mongoose
  .connect("mongodb://127.0.0.1/mernstack", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(async () => {
    console.log("Connection to MongoDB created");

    //   Perform 'CRUD Operations'      

    let Product = await  createProduct("simple cars", 300, ["car", "honda"]);
    console.log('whats Happenig',Product);

    // let allProducts = await getAllProducts();
    // console.log(allProducts);
    //console.log(await deleteProduct("63a3650d37411c40c408cc7d"));
    // let updatedProduct = await updateProduct(
    //   "63a36519722c30348c4523e1",
    //   "DELL Updated",
    //   250,
    //   []
    // );
    //console.log(updatedProduct);
  })
  .catch((err) => {
    console.log("Error Connecting");
    console.log(err);
  });
app.listen(3000);
