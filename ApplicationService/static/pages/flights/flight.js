function init() {

    const token = JSON.parse(localStorage.getItem('token'));

    fetch('http://localhost:8082/admin/flight/getAll', {
        headers: {
            'Authorization': `${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const allFlights = document.getElementById('getAllFlights');

            data.forEach( el => {
                allFlights.innerHTML += `<li>flightId: ${el._id}, flightDestination: ${el.flightDestination}, 
                    departure: ${el.departure}, arrival: ${el.arrival}, price: ${el.price}, airline: ${el.airline},
                    numberOfSeats: ${el.numberOfSeats}, typeOfAirplane: ${el.typeOfAirplane} </li>`;
            });
        });


    document.getElementById('addFlight').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            flightDestination: document.getElementById('flightDestination').value,
            departure: document.getElementById('departure').value,
            arrival: document.getElementById('arrival').value,
            price: document.getElementById('price').value,
            airline: document.getElementById('airline').value,
            numberOfSeats: document.getElementById('numberOfSeats').value,
            typeOfAirplane: document.getElementById('typeOfAirplane').value
        };


        fetch('http://localhost:8082/admin/flight/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),

        })

            .then( res => res.json() )
            .then( el => {
                window.location.href = 'flight.html';
            });
    });

    document.getElementById('deleteFlight').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            flightId: document.getElementById('flightId').value
        };

        fetch('http://localhost:8082/admin/flight/delete', { //+ ID.value, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),
        })
            .then( res => res.json() )
            .then( el => {
                window.location.href = 'flight.html';
            });
    });

    document.getElementById('updateFlight').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            flightId: document.getElementById('flightId').value,
            flightDestination: document.getElementById('flightDestination').value,
            departure: document.getElementById('departure').value,
            arrival: document.getElementById('arrival').value,
            price: document.getElementById('price').value,
            airline: document.getElementById('airline').value,
            numberOfSeats: document.getElementById('numberOfSeats').value,
            typeOfAirplane: document.getElementById('typeOfAirplane').value
        };

        fetch('http://localhost:8082/admin/flight/update', { //+id.value, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),
        })

            .then( res => res.json() )
            .then( el => {
                window.location.href = 'flight.html';
            });
    });


    document.getElementById('getFlight').addEventListener('click', e => {
        e.preventDefault();

    const data = {
        flightId: document.getElementById('flightId').value
    };

    fetch('http://localhost:8082/admin/flight/getOne', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}

    })

        .then( res => res.json() )
        .then( el => {
            window.location.href = 'user.html';
        });
    });

    document.getElementById('logout').addEventListener('click', e => {
        window.location.href = 'login.html';
    });
}