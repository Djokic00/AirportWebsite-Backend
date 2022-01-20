function init() {

    document.getElementById('user').addEventListener('click', e => {
        if (!localStorage.getItem("token")) {
            alert("You are not logged in");
            window.location.href = '/login.html';
            return;
        }
        window.location.href = '/pages/user/user.html';
    });

    document.getElementById('flight').addEventListener('click', e => {
        if (!localStorage.getItem("token")) {
            alert("You are not logged in");
            window.location.href = '/login.html';
            return;
        }
        window.location.href = '/pages/flights/flight.html';
    });

    document.getElementById('cargo').addEventListener('click', e => {
        if (!localStorage.getItem("token")) {
            alert("You are not logged in");
            window.location.href = '/login.html';
            return;
        }
        window.location.href = '/pages/cargo/cargo.html';
    });

    document.getElementById('rentACar').addEventListener('click', e => {
        if (!localStorage.getItem("token")) {
            alert("You are not logged in");
            window.location.href = '/login.html';
            return;
        }
        window.location.href = 'pages/rentACar/rentACar.html';
    });

    document.getElementById('insurance').addEventListener('click', e => {
        if (!localStorage.getItem("token")) {
            alert("You are not logged in");
            window.location.href = '/login.html';
            return;
        }
        window.location.href = 'pages/insurance/insurance.html';
    });

    document.getElementById('login').addEventListener('click', e => {
        window.location.href = 'login.html';
    });

    document.getElementById('logout').addEventListener('click', e => {
        if (!localStorage.getItem("token")) {
            alert("You are not logged in");
            return;
        }
        window.location.href = 'login.html';
    });
}