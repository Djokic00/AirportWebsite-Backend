import Cargo from "../models/cargo.js";
import RentACar from "../models/rentACar.js";
import {validateRentACarInput} from "../validation/validation.js";
import {validateFlightUpdate, validateRentACarUpdate} from "../validation/validationUpdate.js";

export const addCar = async (request, response) => {
    const {carName, pickUpTime, dropOffTime, price, numberOfSeats} = request.body;

    const validInput = validateRentACarInput(request, response);

    if (validInput === false) {
        return;
    }

    const car = new RentACar({
        carName: carName,
        pickUpTime: pickUpTime,
        dropOffTime: dropOffTime,
        price: price,
        numberOfSeats: numberOfSeats
    });
    try {
        const newCar = await car.save();
        response.send(200).json({message: `Successfully added: ${newCar.carName}`})
    } catch(error) {
        response.status(400).json({message: error.message});
    }
}

export const getCar = async(request, response) => {
    const {carId} = request.body.carId;
    try {
        const car = await Cargo.findById(carId);
        if (!car) {
            response.status(400).json({ message: `Wrong ID! Cargo with ${carId} does not exists`});
            return;
        }
        response.status(200).json(car);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const getAllCars = async(request, response) => {
    try {
        const car = await Cargo.find();
        if (!car) {
            response.status(400).json({ message: "Currently there are no cars" });
            return;
        }
        response.status(200).json(car);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const updateCar = async(request, response) => {
    const carId = request.body.carId;
    const updateContent = request.body;
    try {
        const car = await Cargo.findById(carId);
        if (!car) {
            response.status(400).json({message: `Wrong ID! Car with ${car} does not exists`});
            return;
        }
        const validInput = validateRentACarUpdate(request, response);
        if (validInput === false) {
            return;
        }
        const newCar = await Cargo.findByIdAndUpdate(car._id, updateContent);
        response.status(200).json(`Successfully edited ${newCar.carName} car`);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const deleteCar = async(request, response) => {
    const carId = request.body.carId;
    try {
        const car = Cargo.findById(carId)
        if (!car) {
            response.status(400).json({message: `Wrong ID! Car with ${carId} does not exists`})
            return;
        }
        await Cargo.findByIdAndDelete(carId);
        response.status(200).json({ message: `${car.title} car successfully deleted`});

    } catch (error) {
        response.send(400).json({message: error.details})
    }
}