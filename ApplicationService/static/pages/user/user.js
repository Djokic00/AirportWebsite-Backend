function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    fetch('http://localhost:8080/admin/getAll', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const allUsers = document.getElementById('getAllUsers');

            data.forEach( el => {
                allUsers.innerHTML += `<li>ID: ${el._id}, Full Name: ${el.fullName}, E-mail: ${el.email}, 
                username: ${el.username}, User Type: ${el.userType}, Banned: ${el.isBanned}</li>`;
            });
        });


    document.getElementById('addUser').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            userType: document.getElementById('userType').value,
            isBanned: document.getElementById('isBanned').value
        };

        fetch('http://localhost:8080/admin/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)

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