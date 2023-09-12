import mongoose from "mongoose"

export const dbConnect = () => {
    try {
        const conn = mongoose.connect('mongodb+srv://abed26194:C45S7mi9R3PNgQSR@cluster0.2w2kaaf.mongodb.net/');
        console.log("Database Connected Successully");
    } catch (error) {
        console.log("Database Error");
    } 
}
