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
    cargoId: Joi.string().required(),
    productName: Joi.string(),
    departure: Joi.date(),
    pricePerKg: Joi.number(),
    hazardous: Joi.boolean(),
    deliveryDestination: Joi.string()
});

export const validateCargoUpdate = (request, response) => {
    return Joi.validate(request.body, cargoSchema, (error) => {
        console.log(request.body)
        if (error) {
            response.status(400).json({message: error.details});
            return false;
        } else {
            return true;
        }
    });
}


const rentACarSchema = Joi.object({
    carId: Joi.string().required(),
    carName: Joi.string(),
    pricePerDay: Joi.number().integer(),
    yearOfProduction: Joi.date(),
    fuelConsumption: Joi.number().integer(),
    numberOfSeats: Joi.number().integer(),
    numberOfCars: Joi.number().integer()
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
    insuranceId: Joi.string().required(),
    nameOfCompany: Joi.string(),
    destinationCountry: Joi.string(),
    typeOfInsurance: Joi.string(),
    premium: Joi.number().integer(),
    levelOfCover: Joi.number().integer()
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