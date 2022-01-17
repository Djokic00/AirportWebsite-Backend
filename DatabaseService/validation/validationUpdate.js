import Joi from "joi"

const flightSchema = Joi.object({
    flightId: Joi.string(),
    flightDestination: Joi.string(),
    departure: Joi.date(),
    arrival: Joi.date(),
    price: Joi.number().integer(),
    airline: Joi.string(),
    numberOfSeats: Joi.number(),
    typeOfAirplane: Joi.string()
});


export const validateFlightUpdate = (request, response) => {
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
    cargoId: Joi.string(),
    productName: Joi.string(),
    departure: Joi.date(),
    price: Joi.number().integer(),
    weight: Joi.string(),
    size: Joi.number(),
    hazardous: Joi.boolean(),
    deliveryDestination: Joi.string()
});

export const validateCargoUpdate = (request, response) => {
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
    carId: Joi.string(),
    carName: Joi.string(),
    pickUpTime: Joi.date(),
    dropOffTime: Joi.date(),
    price: Joi.number().integer(),
    numberOfSeats: Joi.number()
});


export const validateRentACarUpdate = (request, response) => {
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
    insuranceId: Joi.string(),
    title: Joi.string(),
    startTime: Joi.date(),
    endTime: Joi.date(),
    price: Joi.number().integer(),
    typeOfInsurance: Joi.string()
});


export const validateInsuranceUpdate = (request, response) => {
    return Joi.validate(request.body, insuranceSchema, (error) => {
        if (error) {
            response.status(400).json({message: error.details});
            return false;
        } else {
            return true;
        }
    });
}