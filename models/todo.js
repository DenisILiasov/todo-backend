import mongoose from "mongoose";

const todoShema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: false
    },
    user: {
        type: String,
        required: true
    }
}, 
{
    timestamps: true,
})

export default mongoose.model("Todo", todoShema)