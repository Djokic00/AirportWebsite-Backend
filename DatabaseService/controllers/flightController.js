import Flight from "../models/flight.js";
//import {validateFlightInput} from "../validation/validation.js";
import {request, response} from "express";
import {validateFlightUpdate} from "../validation/validationUpdate.js";

export const addFlight = async (request, response) => {
   const validInput = validateFlightInput(request, response);

    if (validInput === false) {
        return;
    }

    const {flightDestination, departure, arrival, price, airline, numberOfSeats, typeOfAirplane} = request.body;

    const flight = new Flight({
        flightDestination: flightDestination,
        departure: departure,
        arrival: arrival,
        price: price,
        airline: airline,
        numberOfSeats: numberOfSeats,
        typeOfAirplane: typeOfAirplane
    });

    try {
        const newFlight = await flight.save();
        response.status(200).json({message: `Successfully added flight to ${newFlight.flightDestination}`})
    } catch(error) {
        response.status(400).json({message: error.message});
    }

}

export const getFlight = async(request, response) => {
    const {flightId} = request.body.flightId;
    try {
        const flight = await Flight.findById(flightId);
        if (!flight) {
            response.status(400).json({ message: `Wrong ID! Flight with ${flightId} does not exists`});
            return;
        }
        response.status(200).json(flight);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const getAllFlights = async(request, response) => {
    try {
        const flight = await Flight.find();
        if (!flight) {
            response.status(400).json({ message: "Currently there are no flights" });
            return;
        }
        response.status(200).json(flight);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const updateFlight = async(request, response) => {
    const flightId = request.body.flightId;
    const updateContent = request.body;
    try {
        const flight = await Flight.findById(flightId);
        if (!flight) {
            response.status(400).json({message: `Wrong ID! Flight with ${flightId} does not exists`});
            return;
        }
        const validInput = validateFlightUpdate(request, response);
        if (validInput === false) {
            return;
        }
        const newFlight = await Flight.findByIdAndUpdate(flight._id, updateContent);
        response.status(200).json(`Successfully edited flight to ${newFlight.flightDestination}`);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const deleteFlight = async(request, response) => {
    const flightId = request.body.flightId;
    try {
        const flight = Flight.findById(flightId)
        if (!flight) {
            response.status(400).json({message: `Wrong ID! Flight with ${flightId} does not exists`})
            return;
        }
        await Flight.findByIdAndDelete(flightId);
        response.status(200).json({ message: `Successfully deleted flight: ${flight.title}`});

    } catch (error) {
        response.send(400).json({message: error.details})
    }
}
