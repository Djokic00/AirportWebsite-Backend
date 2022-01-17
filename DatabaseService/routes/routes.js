import express from "express";
import {addFlight, getAllFlights, getFlight, updateFlight, deleteFlight} from "../controllers/flightController.js";
import {addCargo, getAllCargo, getCargo, updateCargo, deleteCargo} from "../controllers/cargoController.js";
import {authentication} from "../middleware/authentication.js";
import {addInsurance,
    deleteInsurance,
    getAllInsurance,
    getInsurance,
    updateInsurance
} from "../controllers/insuranceController.js";
import {addCar, deleteCar, getAllCars, getCar, updateCar} from "../controllers/rentACarController.js";

const router = express.Router();

router.post("/flight/add", addFlight);
router.get("/flight/getOne", getFlight);
router.get("/flight/getAll", getAllFlights);
router.patch("/flight/update", updateFlight);
router.delete("/flight/delete", deleteFlight);

router.post("/cargo/add", addCargo);
router.get("/cargo/getOne", getCargo);
router.get("/cargo/getAll", getAllCargo);
router.patch("/cargo/update", updateCargo);
router.delete("/cargo/delete", deleteCargo);

router.post("/insurance/add", addInsurance);
router.get("/insurance/getOne", getInsurance);
router.get("/insurance/getAll", getAllInsurance);
router.patch("/insurance/update", updateInsurance);
router.delete("/insurance/delete", deleteInsurance);

router.post("/rentACar/add", addCar);
router.get("/rentACar/getOne", getCar);
router.get("/rentACar/getAll", getAllCars);
router.patch("/rentACar/update", updateCar);
router.delete("/rentACar/delete", deleteCar);

export default router