import Cargo from "../models/cargo.js";
import {validateCargoInput} from "../validation/validation.js";
import {validateCargoUpdate, validateFlightUpdate} from "../validation/validationUpdate.js";

export const addCargo = async (request, response) => {
    const {productName, departure, pricePerKg, hazardous, deliveryDestination} = request.body;

    const validInput = validateCargoInput(request, response);
    if (validInput === false) {
        return;
    }

    const cargo = new Cargo({
        productName: productName,
        departure: departure,
        pricePerKg: pricePerKg,
        // weight: weight,
        // size: size,
        hazardous: hazardous,
        deliveryDestination: deliveryDestination
    });
    try {
        const newCargo = await cargo.save();
        response.status(200).json({message: `Successfully added: ${newCargo.productName}`})
    } catch(error) {
        response.status(400).json({message: error.message});
    }
}

export const getCargo = async(request, response) => {
    const {cargoId} = request.body.cargoId;
    try {
        const cargo = await Cargo.findById(cargo);
        if (!cargo) {
            response.status(400).json({ message: `Wrong ID! Cargo with ${cargoId} does not exists`});
            return;
        }
        response.status(200).json(cargo);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const getAllCargo = async(request, response) => {
    try {
        const cargo = await Cargo.find();
        if (!cargo) {
            response.status(400).json({ message: "Currently there are no cargos" });
            return;
        }
        response.status(200).json(cargo);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const updateCargo = async(request, response) => {
    const cargoId = request.body.cargoId;
    const updateContent = request.body;
    try {
        const cargo = await Cargo.findById(cargoId);
        if (!cargo) {
            response.status(400).json({message: `Wrong ID! Cargo with ${cargo} does not exists`});
            return;
        }
        const validInput = validateCargoUpdate(request, response);
        if (validInput === false) {
            return;
        }
        const newCargo = await Cargo.findByIdAndUpdate(cargo._id, updateContent);
        response.status(200).json(`Successfully edited cargo ${newCargo.productName}`);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const deleteCargo = async(request, response) => {
    const cargoId = request.body.cargoId;
    try {
        const cargo = Cargo.findById(cargoId)
        if (!cargo) {
            response.status(400).json({message: `Wrong ID! Cargo with ${cargoId} does not exists`})
        }
        await Cargo.findByIdAndDelete(cargoId);
        response.status(200).json({ message: `Successfully deleted cargo: ${cargoId.productName}`});

    } catch (error) {
        response.status(400).json({message: error.details})
    }
}