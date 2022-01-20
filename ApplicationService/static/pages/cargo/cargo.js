function init() {

    const token = JSON.parse(localStorage.getItem('token'));

    fetch('http://localhost:8082/admin/cargo/getAll', {
        headers: {
            'Authorization': `${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const allCargos = document.getElementById('getAllCargo');

            data.forEach( el => {
                allCargos.innerHTML += `<li>cargoId: ${el._id}, productName: ${el.productName}, 
                    departure: ${el.departure}, pricePerKg: ${el.pricePerKg}, hazardous: ${el.hazardous},
                    deliveryDestination: ${el.deliveryDestination}</li>`;
            });
        });

    document.getElementById('addCargo').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            productName: document.getElementById('productName').value,
            departure: document.getElementById('departure').value,
            pricePerKg: document.getElementById('pricePerKg').value,
            hazardous: document.getElementById('hazardous').value,
            deliveryDestination: document.getElementById('deliveryDestination').value
        };

        fetch('http://localhost:8082/admin/cargo/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),

        })

            .then( res => res.json() )
            .then( el => {

                // document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'cargo.html';
            });
    });

    document.getElementById('deleteCargo').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            cargoId: document.getElementById('cargoId').value
        };

        fetch('http://localhost:8082/admin/cargo/delete', { //+ ID.value, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),
        })
            .then( res => res.json() )
            .then( el => {
                //document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'cargo.html';
            });
    });


    document.getElementById('updateCargo').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            cargoId: document.getElementById('cargoId').value,
            productName: document.getElementById('productName').value,
            departure: document.getElementById('departure').value,
            pricePerKg: document.getElementById('pricePerKg').value,
            hazardous: document.getElementById('hazardous').value,
            deliveryDestination: document.getElementById('deliveryDestination').value
        };

        fetch('http://localhost:8082/admin/cargo/update', { //+id.value, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),
        })

            .then( res => res.json() )
            .then( el => {

                //document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'cargo.html';
            });
    });


    document.getElementById('getCargo').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            cargoId: document.getElementById('cargoId').value
        };

        fetch('http://localhost:8082/admin/cargo/getOne', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}

        })

            .then( res => res.json() )
            .then( el => {

                //document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'user.html';
            });
    });

    document.getElementById('logout').addEventListener('click', e => {
        //document.cookie = `token=;SameSite=Lax`;
        window.location.href = 'login.html';
    });
}
