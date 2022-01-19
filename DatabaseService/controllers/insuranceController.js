import Insurance from "../models/insurance.js";
import {validateInsuranceInput} from "../validation/validation.js";
import {validateFlightUpdate, validateInsuranceUpdate} from "../validation/validationUpdate.js";

export const addInsurance = async (request, response) => {
    const {nameOfCompany, destinationCountry, typeOfInsurance, premium, levelOfCover} = request.body;

    const validInput = validateInsuranceInput(request, response);

    if (validInput === false) {
        return;
    }

    const insurance = new Insurance({
        nameOfCompany: nameOfCompany,
        destinationCountry: destinationCountry,
        typeOfInsurance: typeOfInsurance,
        premium: premium,
        levelOfCover: levelOfCover
    });
    try {
        const newInsurance = await insurance.save();
        response.status(200).json({message: `Successfully added: ${newInsurance.nameOfCompany}`})
    } catch(error) {
        response.status(400).json({message: error.message});
    }
}

export const getInsurance = async(request, response) => {
    const {insuranceId} = request.body.insuranceId;
    try {
        const insurance = await Insurance.findById(cargo);
        if (!insurance) {
            response.status(400).json({ message: `Wrong ID! Cargo with ${insuranceId} does not exists`});
            return;
        }
        response.status(200).json(insurance);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const getAllInsurance = async(request, response) => {
    try {
        const insurance = await Insurance.find();
        if (!insurance) {
            response.status(400).json({ message: "Currently there are no cargos" });
            return;
        }
        response.status(200).json(insurance);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const updateInsurance = async(request, response) => {
    const insuranceId = request.body.insuranceId;
    const updateContent = request.body;
    try {
        const insurance = await Insurance.findById(insuranceId);
        if (!insurance) {
            response.status(400).json({message: `Wrong ID! Cargo with ${insurance} does not exists`});
            return;
        }
        const newInsurance = await Insurance.findByIdAndUpdate(insurance._id, updateContent);
        response.status(200).json(`Successfully edited flight to ${newInsurance.title}`);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const deleteInsurance = async(request, response) => {
    const insuranceId = request.body.insuranceId;
    try {
        const insurance = Insurance.findById(insuranceId)
        if (!insurance) {
            response.status(400).json({message: `Wrong ID! Cargo with ${insuranceId} does not exists`})
        }
        await Insurance.findByIdAndDelete(insuranceId);
        response.status(200).json({ message: `Successfully deleted cargo: ${insuranceId.title}`});

    } catch (error) {
        response.send(400).json({message: error.details})
    }
}