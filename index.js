import mongoose from 'mongoose';
import app from './app.js';

(async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/test")
        console.log("DB connected")
    }
    catch(err){
        console.log(err);
    }
})()


console.log("Hleoo")