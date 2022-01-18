import mongoose from "mongoose";

const rentACar = mongoose.Schema({
    carName: { type: String, required: true },
    pricePerDay: { type: Number, required: true },
    yearOfProduction: { type: Date, required: true },
    fuelConsumption: { type: Number, required: true },
    numberOfSeats: { type: Number, default: 4 },
    numberOfCars: {type: Number, required: true}
    //imageURL: { type: String, required: true },
});

const RentACar = mongoose.model("Rent a car", rentACar);

export default RentACar;