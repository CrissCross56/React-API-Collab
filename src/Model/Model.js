import mongoose from "mongoose";

const PaintingSchema = new mongoose.Schema({
    title: String,
    date_display: String,
    artist: String,
    img: String
});

export default mongoose.model("PaintingModel", PaintingSchema);