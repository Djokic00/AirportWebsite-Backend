import mongoose from "mongoose";

const reservation = mongoose.Schema({
    flightDestination: { type: String, required: true },
    departure: { type: Date, required: true },
    arrival: { type: Date, required: true },
    price: { type: Number, required: true },
    airline: { type: String, required: true },
    numberOfSeats: {type: Number, required: true},
    typeOfAirplane: {type: String, required: true},
    userId: {type: String, required: true},
});

const Reservation = mongoose.model("Reservation", reservation);

export default Reservation;