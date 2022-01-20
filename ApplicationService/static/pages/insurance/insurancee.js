function init() {

    const token = JSON.parse(localStorage.getItem('token'));

    fetch('http://localhost:8082/admin/insurance/getAll', {
        headers: {
            'Authorization': `${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const allInsurance = document.getElementById('getAllInsurance');

            data.forEach( el => {
                allInsurance.innerHTML += `<li>insuranceId: ${el._id}, nameOfCompany: ${el.nameOfCompany}, 
                    destinationCountry: ${el.destinationCountry}, typeOfInsurance: ${el.typeOfInsurance}, 
                    premium: ${el.premium}, levelOfCover: ${el.levelOfCover}</li>`;
            });
        });

    document.getElementById('addInsurance').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            nameOfCompany: document.getElementById('nameOfCompany').value,
            destinationCountry: document.getElementById('destinationCountry').value,
            typeOfInsurance: document.getElementById('typeOfInsurance').value,
            premium: document.getElementById('premium').value,
            levelOfCover: document.getElementById('levelOfCover').value
        };

        fetch('http://localhost:8082/admin/insurance/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),

        })

            .then( res => res.json() )
            .then( el => {

                //document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'insurance.html';
            });
    });

    document.getElementById('deleteInsurance').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            insuranceId: document.getElementById('insuranceId').value
        };

        fetch('http://localhost:8082/admin/insurance/delete', { //+ ID.value, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),
        })
            .then( res => res.json() )
            .then( el => {
                //document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'insurance.html';
            });
    });


    document.getElementById('updateInsurance').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            nameOfCompany: document.getElementById('nameOfCompany').value,
            destinationCountry: document.getElementById('destinationCountry').value,
            typeOfInsurance: document.getElementById('typeOfInsurance').value,
            premium: document.getElementById('premium').value,
            levelOfCover: document.getElementById('levelOfCover').value
        };

        fetch('http://localhost:8082/admin/insurance/update', { //+id.value, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),
        })

            .then( res => res.json() )
            .then( el => {

                //document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'insurance.html';
            });
    });


    document.getElementById('getInsurance').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            insuranceId: document.getElementById('insuranceId').value
        };

        fetch('http://localhost:8082/admin/insurance/getOne', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}

        })

            .then( res => res.json() )
            .then( el => {

               // document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'user.html';
            });
    });

    document.getElementById('logout').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = 'login.html';
    });
}