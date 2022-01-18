import mongoose from "mongoose";

const cargo = mongoose.Schema({
    productName: { type: String, required: true },
    departure: { type: Date, required: true },
    price: { type: Number, required: true },
    // weight: { type: Number, required: 0 },
    // size: { type: String, required: 0 },
    hazardous: {type: Boolean, required: true},
    deliveryDestination: {type: String, required: true}
    //imageURL: { type: String, required: true },
});

// pricePerKg

const Cargo = mongoose.model("Cargo", cargo);

export default Cargo;