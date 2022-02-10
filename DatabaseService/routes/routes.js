import express from "express";
import {addFlight, getAllFlights, getFlight, updateFlight, deleteFlight} from "../controllers/flightController.js";
import {addCargo, getAllCargo, getCargo, updateCargo, deleteCargo} from "../controllers/cargoController.js";
import {authentication, checkIfAdmin, checkIfModerator} from "../middleware/authentication.js";
import {addInsurance, deleteInsurance, getAllInsurance, getInsurance, updateInsurance
} from "../controllers/insuranceController.js";
import {addCar, deleteCar, getAllCars, getCar, updateCar} from "../controllers/rentACarController.js";
import {deleteUser} from "../controllers/userController.js";

const router = express.Router();

router.post("/flight/add", authentication, checkIfModerator, addFlight);
router.get("/flight/getOne", authentication, checkIfModerator, getFlight);
router.get("/flight/getAll", getAllFlights);
router.patch("/flight/update", authentication, checkIfModerator, updateFlight);
router.delete("/flight/delete", authentication, checkIfModerator, deleteFlight);

router.post("/cargo/add", authentication, checkIfModerator, addCargo);
router.get("/cargo/getOne",authentication, checkIfModerator, getCargo);
router.get("/cargo/getAll", getAllCargo);
router.patch("/cargo/update", authentication, checkIfModerator, updateCargo);
router.delete("/cargo/delete", authentication, checkIfModerator, deleteCargo);

router.post("/insurance/add", authentication, checkIfModerator,addInsurance);
router.get("/insurance/getOne",authentication, checkIfModerator, getInsurance);
router.get("/insurance/getAll", getAllInsurance);
router.patch("/insurance/update", authentication, checkIfModerator, updateInsurance);
router.delete("/insurance/delete", authentication, checkIfModerator, deleteInsurance);

router.post("/rentACar/add", authentication, checkIfModerator, addCar);
router.get("/rentACar/getOne",authentication, checkIfModerator, getCar);
router.get("/rentACar/getAll", getAllCars);
router.patch("/rentACar/update", authentication, checkIfModerator,updateCar);
router.delete("/rentACar/delete",authentication, checkIfModerator, deleteCar);

router.delete("/user/delete", authentication, checkIfAdmin, deleteUser);

export default router