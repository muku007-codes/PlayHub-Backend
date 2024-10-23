import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";
import {v2 as cloudinary} from "cloudinary"

dotenv.config({
    path: './.env'
})



cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })

    app.on('error', (err) => {
        console.error(err);
        throw err;
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})










// import dotenv from 'dotenv';
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants.js"
// import express from "express";

// dotenv.config({ path: '../.env' });

// // console.log(process)
// const app = express();

// (async ()=>{
//     try {
//         console.log(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on('error', (error)=>{
//             console.error(error);
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log('listening on port on ', process.env.PORT);
//         })
        
//     } catch (error) {
//         console.error("Error:" , error)
//         throw error;
//     }
// })()
 