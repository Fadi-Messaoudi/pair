const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const productSchema = new mongoose.Schema({
    date: String,
    dbara: String,
    imageUrl: String,
    
    
  });
  
const Product = mongoose.model("Product", productSchema);

module.exports = Product;