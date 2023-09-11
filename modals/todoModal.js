import mongoose from "mongoose";



const todoListSchema = new mongoose.Schema({
    isDone: Boolean,
    title: String,
    date: Date,
},
{
    timestamps: true,
});

export default mongoose.model("TodoList", todoListSchema);
