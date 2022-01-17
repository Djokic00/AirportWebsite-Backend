import mongoose from "mongoose";

const insurance = mongoose.Schema({
    title: { type: String, required: true },
    destinationCountry: {type: String, required: true},
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    price: { type: Number, required: true },
    typeOfInsurance: { type: String, required: true}
});

// jos 1 stvar za osiguranje, naziv osiguranja, cena po danu, tip osiguranja, destinacija

const Insurance = mongoose.model("Insurance", insurance);

export default Insurance;
