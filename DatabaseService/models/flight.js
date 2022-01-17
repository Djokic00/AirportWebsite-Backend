import mongoose from "mongoose";

const flight = mongoose.Schema({
    flightDestination: { type: String, required: true },
    departure: { type: Date, required: true },
    arrival: { type: Date, required: true },
    price: { type: Number, required: true },
    airline: { type: String, required: true },
    numberOfSeats: {type: Number, required: true},
    typeOfAirplane: {type: String, required: true},
    //imageURL: { type: String, required: true },
});

const Flight = mongoose.model("Flight", flight);

export default Flight;