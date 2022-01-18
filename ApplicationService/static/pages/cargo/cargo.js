let flightInformation = JSON.parse(localStorage.getItem("flight"));

import {validateUpdateInput} from "../../../validation/validation";

const updateFlight = (flightId) => {
    const flightDestination = document.getElementById(`flightDestination${flightId}`).value;
    const departure = document.getElementById(`departure${flightId}`).value;
    const arrival = document.getElementById(`arrival${flightId}`).value;
    const price = document.getElementById(`price${flightId}`).value;
    const airline = document.getElementById(`airline${flightId}`).value;
    const numberOfSeats = document.getElementById(`numberOfSeats${flightId}`).value;
    const typeOfAirplane = document.getElementById(`typeOfAirplane${flightId}`).value;



    let validateInput = validateUpdateInput();
    if (validateInput === false) {
        return;
    }

    const requestData = {
        flightId: flightId,
        flightDestination: flightDestination,
        departure: departure,
        arrival: arrival,
        price: Number.parseInt(price),
        airline: airline,
        numberOfSeats: Number.parseInt(numberOfSeats),
        typeOfAirplane: typeOfAirplane
    }

    const token = JSON.parse(localStorage.getItem("token"));
    fetch("http://localhost:5000/admin/flight/update", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
        },
        body: JSON.stringify(requestData),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.message) {
                alert(JSON.stringify(data.message));
                return;
            }
            alert("Successfully edited entry");
            getFlights();
        });
};

const deleteFlight = (flightId) => {
    const requestData = {
        flightId: flightId,
    };
    const token = JSON.parse(localStorage.getItem("token"));
    fetch("http://localhost:5000/admin/flight/delete", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
        },
        body: JSON.stringify(requestData),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.message) {
                alert(JSON.stringify(data.message));
                getFlights();
            }
        });
};

const addFlight = () => {
    const flightDestination = document.getElementById("flightDestination").value;
    const departure = document.getElementById("departure").value;
    const arrival = document.getElementById("arrival").value;
    const price = document.getElementById("price").value;
    const airline = document.getElementById("airline").value;
    const numberOfSeats = document.getElementById("numberOfSeats").value;
    const typeOfAirplane = document.getElementById("typeOfAirplane").value;
    //const imageURL = document.getElementById("imageURL").value;

    const requestData = {
        flightDestination: flightDestination,
        departure: departure,
        arrival: arrival,
        price: Number.parseInt(price),
        airline: airline,
        numberOfSeats: Number.parseInt(numberOfSeats),
        typeOfAirplane: typeOfAirplane
        //...(imageURL.length != 0 && { imageURL: imageURL }),
    }

    const token = JSON.parse(localStorage.getItem("token"));
    fetch("http://localhost:5000/admin/flight/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
        },
        body: JSON.stringify(requestData),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.message) {
                alert(JSON.stringify(data.message));
                getFlights();
            }
        });
};

document.getElementById("flights").innerHTML = flightInformation
    .map((flight) =>
        `<div>
    <div>ID: ${flight._id}</div>
    <div>Flight Destination: ${flight.flightDestination}</div>
    <div>Departure: ${flight.departure}</div>
    <div>Arrival: ${flight.arrival}</div>
    <div>Price: ${flight.price}</div>
    <div>Airline: ${flight.airline}</div>
    <div>Number of seats: ${flight.numberOfSeats}</div>
    <div>Type of airplane: ${flight.typeOfAirplane}</div>
  </div>
  <label></label>
  <div class = "textfields">
     <label for="flightDestination">Flight Destination</label>
     <input type="text" id="flightDestination${flight._id}">

     <div>
     <label for="depature">Departure</label>
     <input type="text" id="depature${flight._id}">
     </div>

     <div>
     <label for="arrival">Arrival</label>
     <input type="text" id="arrival${flight._id}">
     </div>

     <div>
     <label for="price">Price</label>
     <input type="text" id="price${flight._id}">
     </div>

     <div>
     <label for="airline">Airline</abel>
     <input type="text" id="airline${flight._id}">
     </div>

     <div>
     <label for="numberOfSeats">Number of seats</label>
     <input type="text" id="numberOfSeats${flight._id}">
     </div>
     
      <div>
     <label for="typeOfAirplane">Type of airplane</label>
     <input type="text" id="typeOfAirplane${flight._id}">
     </div>

     <button type = "submit" onclick = "updateFlight('${flight._id}')">Update</button>
     <button type = "submit" onclick = "deleteFlight('${flight._id}')">Delete</button>
  </div>
  <label></label>
  `
    )
    .join("");


const getFlights = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    fetch("http://localhost:5000/admin/flights/getAll", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.message) {
                alert(JSON.stringify(data.message));
                return;
            }
            localStorage.setItem("flights", JSON.stringify(data));
            window.location.reload();
        });
};

