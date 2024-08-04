import dotenv from "dotenv"
import connectDB from "./db/index.js";
import express from "express"

const app = express()

dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
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
 