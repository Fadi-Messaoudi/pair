const express = require('express');
const cors =require('cors');
 const {getAllProducts,deleteProduct,updateProduct,postProduct}= require ('./mongoDb/index')
const port = 4500;
const app = express();

 const db = require('./mongoDb')

app.use(cors());
app.use(express.json());


app.get('/api/products',(req,res)=> {
    
    getAllProducts()
 .then((results)=>{res.status(200).json(results)})
   .catch((err)=>{res.status(500).send(err)})
  
});
app.delete('/api/products/:productId',(req,res)=>{
   deleteProduct(req.params.productId)
   .then((results)=>{res.status(201).json(results)})
   .catch((err)=>{res.status(500).send(err)})
});
app.put('/api/products/:productId',(req,res)=>{
   updateProduct(req.params.productId)
   .then((results)=>{res.status(201).json(results)})
   .catch((err)=>{res.status(500).send(err)})
})
app.post('/api/products',(req,res)=>{
   postProduct(req.body)
   .then((results)=>{res.status(201).json(results)})
   .catch((err)=>{res.status(500).send(err)})
})





app.listen(port, ()=>{
console.log(`listening on ${port}`);
})