 const express = require('express');
 const app =  express(); 
 const  mongoose =require( "mongoose");
 const port = 3000;
 const routerlist = require("./Modal/Router/router")
 const  cors = require("cors");
 app.use(express.urlencoded({extended:true
 }));
 app.use(express.json());
 // https://nodedemo-six.vercel.app/user/contact
 app.use(cors()); 
 app.use('/user',routerlist); 
 
 app.get('/',(req,res) =>{
   res.send('hello')
   console.log('connected');
 })
 const CONNECTION_URL = 'mongodb+srv://harsh:btwzWwpjLXEfhczo@cluster0.6iqg1pq.mongodb.net/vuejsdemo?retryWrites=true&w=majority'

 mongoose.connect(CONNECTION_URL,{
   useNewUrlParser: true,
   useUnifiedTopology: true
 }).then(()=> {
   console.log('mongoose connect')
 })
 app.listen(port,() => {
    console.log(`http://localhost:${port}`);
 })