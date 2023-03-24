const mongoose = require("mongoose");
const product = require ('./Product');

const mongoUri = "mongodb://127.0.0.1/pair-project";
mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{console.log("db mongo connected")}).catch(err=>console.log(err));
const db = mongoose.connection;

const getAllProducts = () => {
  return product.find({});        
};
const deleteProduct = (id) =>{
 return product.findByIdAndDelete(id)
};
const updateProduct = (id,data) =>{
  return product.findByIdAndUpdate({_id:id},{status:data})
};
const postProduct = (x) => {
  return product.insertMany(x)
}

module.exports = {
  db,
  getAllProducts,
  deleteProduct,
  updateProduct,
  postProduct
};
