const ProductModel = require("./models/ProductModel");

const createProduct = async (title, price, tags) => {
  
  console.log("Create Product");
  let Product = new ProductModel();
  Product.title = title;
  Product.price = price;
  Product.tags = tags;
  await Product.save();
  return Product;
};
const updateProduct = async (_id, title, price, tags) => {
  let Product = await ProductModel.findById(_id);
  Product.title = title;
  Product.price = price;
  Product.tags = tags;
  await Product.save();
  return Product;
};
const getAllProducts = async () => {
  let Product = await ProductModel.find();
  return Product;
};
const deleteProduct = async (_id) => {
  let Product = await ProductModel.findByIdAndDelete(_id);
  return Product;
};
module.exports.createProduct = createProduct;
module.exports.getAllProducts = getAllProducts;
module.exports.deleteProduct = deleteProduct;
module.exports.updateProduct = updateProduct;
