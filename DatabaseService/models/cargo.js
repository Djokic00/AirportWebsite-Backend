import mongoose from "mongoose";

const cargo = mongoose.Schema({
    productName: { type: String, required: true },
    departure: { type: Date, required: true },
    pricePerKg: { type: Number, required: true },
    hazardous: {type: Boolean, required: true},
    deliveryDestination: {type: String, required: true}
});

// pricePerKg

const Cargo = mongoose.model("Cargo", cargo);

export default Cargo;