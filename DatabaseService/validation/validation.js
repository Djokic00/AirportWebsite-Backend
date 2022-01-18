// //import Joi from "joi";
import Joi from "joi"

const flightSchema = Joi.object({
    flightDestination: Joi.string().required(),
    departure: Joi.date().required(),
    arrival: Joi.date().required(),
    price: Joi.number().integer().required(),
    airline: Joi.string().required(),
    numberOfSeats: Joi.number().required(),
    typeOfAirplane: Joi.string().required()
});


export const validateFlightInput = (request, response) => {
    return Joi.validate(request.body, flightSchema, (error) => {
        if (error) {
            response.status(400).json({message: error.details});
            return false;
        } else {
            return true;
        }
    });
}

const cargoSchema = Joi.object({
    productName: Joi.string().required(),
    departure: Joi.date().required(),
    price: Joi.number().integer().required(),
    // weight: Joi.string().required(),
    // size: Joi.number().required(),
    hazardous: Joi.boolean(),
    deliveryDestination: Joi.string()
});

export const validateCargoInput = (request, response) => {
    return Joi.validate(request.body, cargoSchema, (error) => {
        if (error) {
            response.status(400).json({message: error.details});
            return false;
        } else {
            return true;
        }
    });
}


const rentACarSchema = Joi.object({
    carName: Joi.string().required(),
    pricePerDay: Joi.number().integer().required(),
    yearOfProduction: Joi.date().required(),
    fuelConsumption: Joi.number().integer().required(),
    numberOfSeats: Joi.number().integer().required(),
    numberOfCars: Joi.number().integer().required()
});


export const validateRentACarInput = (request, response) => {
    return Joi.validate(request.body, rentACarSchema, (error) => {
        if (error) {
            response.status(400).json({message: error.details});
            return false;
        } else {
            return true;
        }
    });
}

const insuranceSchema = Joi.object({
    nameOfCompany: Joi.string().required(),
    destinationCountry: Joi.string().required(),
    typeOfInsurance: Joi.string().required(),
    premium: Joi.number().integer().required(),
    levelOfCover: Joi.number().integer().required(),
});


export const validateInsuranceInput = (request, response) => {
    return Joi.validate(request.body, insuranceSchema, (error) => {
        if (error) {
            response.status(400).json({message: error.details});
            return false;
        } else {
            return true;
        }
    });
}