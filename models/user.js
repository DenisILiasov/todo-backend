import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
}, 
{
    timestamps: true,
})

export default mongoose.model("User", userShema)