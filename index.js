const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const colors = require('colors');
const { ErrorHandeler } = require('./Middleware/ErrorHandeler');
const connectDB = require('./MongoConnect');

/* ------Middleware----------*/
app.use(cors());
app.use(express.json());
/* ------Middleware----------*/

/* ------Routes----------*/
/* ------Routes----------*/
/* ------HomeRoutes----------*/
app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Welcome to the home page",
        status:200
    })
})
/* ------HomeRoutes----------*/
/* ------ConnectToDB----------*/
connectDB()
/* ------ConnectToDB----------*/

/* ------Lisiting Port----------*/
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`.red.underline.bold)
})
/* ------Lisiting Port----------*/
/* ------ Existing nothing----------*/
app.all("*",(req,res)=>{
    res.status(404).json({
        message:`Can't find ${req.originalUrl} on this server`,
        status:404
    })
})
/* ------ Existing nothing----------*/
/* ------ Global Error Handeler----------*/
app.use(ErrorHandeler)
/* ------ Global Error Handeler----------*/



