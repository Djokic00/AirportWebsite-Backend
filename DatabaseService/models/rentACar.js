import mongoose from "mongoose";

const rentACar = mongoose.Schema({
    carName: { type: String, required: true },
    pickUpTime: { type: Date, required: true },
    dropOffTime: { type: Date, required: true },
    price: { type: Number, required: true },
    numberOfSeats: { type: Number, default: 4 },
    //imageURL: { type: String, required: true },
});

// naziv, cena po danu, broj sedista, mozda godiste, potrosnja

const RentACar = mongoose.model("Rent a car", rentACar);

export default RentACar;