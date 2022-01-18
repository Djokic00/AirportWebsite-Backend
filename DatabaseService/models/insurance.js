import mongoose from "mongoose";

const insurance = mongoose.Schema({
    nameOfCompany: { type: String, required: true },
    destinationCountry: {type: String, required: true},
    typeOfInsurance: { type: String, required: true},
    premium: { type: Number, required: true },
    levelOfCover: {type: Number, required: true}
});

// jos 1 stvar za osiguranje, naziv osiguranja, cena po danu, tip osiguranja, destinacija

const Insurance = mongoose.model("Insurance", insurance);

export default Insurance;
