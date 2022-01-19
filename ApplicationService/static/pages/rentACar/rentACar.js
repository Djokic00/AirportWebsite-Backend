function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    fetch('http://localhost:8082/admin/rentACar/getAll', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const allCars = document.getElementById('getAllCars');

            data.forEach( el => {
                allCars.innerHTML += `<li>carId: ${el._id}, carName: ${el.carName}, 
                    pricePerDay: ${el.pricePerDay}, yearOfProduction: ${el.yearOfProduction}, fuelConsumption: ${el.fuelConsumption}, 
                    numberOfSeats: ${el.numberOfSeats}, numberOfCars: ${el.numberOfCars}</li>`;
            });
        });

    document.getElementById('addCar').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            carName: document.getElementById('carName').value,
            pricePerDay: document.getElementById('pricePerDay').value,
            yearOfProduction: document.getElementById('yearOfProduction').value,
            fuelConsumption: document.getElementById('fuelConsumption').value,
            numberOfSeats: document.getElementById('numberOfSeats').value,
            numberOfCars: document.getElementById('numberOfCars').value
        };


        fetch('http://localhost:8082/admin/rentACar/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)

        })

            .then( res => res.json() )
            .then( el => {

                document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'rentACar.html';
            });
    });

    document.getElementById('deleteCar').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            carId: document.getElementById('carId').value
        };

        fetch('http://localhost:8082/admin/rentACar/delete', { //+ ID.value, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( el => {
                document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'rentACar.html';
            });
    });


    document.getElementById('updateCar').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            carId: document.getElementById('carId').value,
            carName: document.getElementById('carName').value,
            pricePerDay: document.getElementById('pricePerDay').value,
            yearOfProduction: document.getElementById('yearOfProduction').value,
            fuelConsumption: document.getElementById('fuelConsumption').value,
            numberOfSeats: document.getElementById('numberOfSeats').value,
            numberOfCars: document.getElementById('numberOfCars').value
        };

        fetch('http://localhost:8082/admin/rentACar/update', { //+id.value, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })

            .then( res => res.json() )
            .then( el => {

                document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'rentACar.html';
            });
    });


    document.getElementById('getCar').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            carId: document.getElementById('carId').value
        };

        fetch('http://localhost:8082/admin/rentACar/getOne', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}

        })

            .then( res => res.json() )
            .then( el => {

                document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'user.html';
            });
    });

    document.getElementById('logout').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = 'login.html';
    });
}