 const express = require('express');
 const app =  express(); 
 const  mongoose =require( "mongoose");
 const port = 4000;
 const routerlist = require("./Modal/Router/router")
 const  cors = require("cors");
 app.use(express.urlencoded({extended:true
 }));
 app.use(express.json());
const mongolink = `mongodb+srv://harshdavda:R3pCNDjrre17eheW@cluster0.5db5anm.mongodb.net/book?retryWrites=true&w=majority`
 app.use(cors()); 
 app.use('/',routerlist); 
 
 app.get('/',(req,res) =>{
   res.send('hello')
   console.log('connected');
 })

 mongoose.connect(mongolink,{
   useNewUrlParser: true,
   useUnifiedTopology: true
 }).then(()=> {
   console.log('mongoose connect')
 })
 app.listen(port,() => {
    console.log(`http://localhost:${port}`);
 })