//window.onload = function () {
    // let userBtn = document.getElementById("user");
    // let flightBtn = document.getElementById("flight");
    // let cargoBtn = document.getElementById("cargo");
    // let rentACarBtn = document.getElementById("rentACar");
    // let insuranceBtn = document.getElementById("insurance")
    // let loginBtn = document.getElementById("login");
    // let logout = document.getElementById("logout");

    // userBtn.onclick = function () {
    // //     if (!localStorage.getItem("token")) {
    // //         alert("Login first");
    // //         return;
    // //     }
    // //     const token = JSON.parse(localStorage.getItem("token"));
    // //     fetch("http://localhost:5000/admin/users/getAll", {
    // //         method: "GET",
    // //         headers: {
    // //             "Content-Type": "application/json",
    // //             "Authorization": `${token}`,
    // //         },
    // //     })
    // //         .then((res) => res.json())
    // //         .then((data) => {
    // //             if(data.message){
    // //                 if (jwtExpired(data.message)) return;
    // //                 alert(JSON.stringify(data.message));
    // //                 return;
    // //             }
    // //             console.log(data);
    // //             localStorage.setItem("users", JSON.stringify(data))
    // //             window.location.href = "pages/users/allusers.html";
    // //         });
    //     window.location.href = "pages/user/user.html";
    // };
    //
    // flightBtn.onclick = function () {
    //     if (!localStorage.getItem("token")) {
    //         alert("Login first");
    //         return;
    //     }
    //     const token = JSON.parse(localStorage.getItem("token"));
    //     fetch("http://localhost:5000/admin/movies/getAll", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": `${token}`,
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if(data.message){
    //                 if (jwtExpired(data.message)) return;
    //                 alert(JSON.stringify(data.message));
    //                 return;
    //             }
    //             console.log(data);
    //             localStorage.setItem("movies", JSON.stringify(data))
    //             window.location.href = "pages/movies/movies.html";
    //         });
    //     window.location.href = "pages/flights/flight.html";
    // };

    // cargoBtn.onclick = function () {
        // // if (!localStorage.getItem("token")) {
        // //     alert("Login first");
        // //     return;
        // // }
        // const token = JSON.parse(localStorage.getItem("token"));
        // fetch("http://localhost:8082/admin/cargo/getAll", {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": `${token}`,
        //     },
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         // if(data.message){
        //         //     if (jwtExpired(data.message)) return;
        //         //     alert(JSON.stringify(data.message));
        //         //     return;
        //         // }
        //         console.log(data);
        //         localStorage.setItem("books", JSON.stringify(data))
        //         window.location.href = "pages/cargo/cargo.html";
        //     });
        // window.location.href = "pages/cargo/cargo.html";
//    };
    //
    // rentACarBtn.onclick = function () {
        //     if (!localStorage.getItem("token")) {
        //         alert("Login first");
        //         return;
        //     }
        //     const token = JSON.parse(localStorage.getItem("token"));
        //     fetch("http://localhost:5000/admin/music/getAll", {
        //         method: "GET",
        //         headers: {
        //             "Content-Type": "application/json",
        //             "Authorization": `${token}`,
        //         },
        //     })
        //         .then((res) => res.json())
        //         .then((data) => {
        //             if(data.message){
        //                 if (jwtExpired(data.message)) return;
        //                 alert(JSON.stringify(data.message));
        //                 return;
        //             }
        //             console.log(data);
        //             localStorage.setItem("songs", JSON.stringify(data))
        //             window.location.href = "pages/music/songs.html";
        //         });
        // window.location.href = "pages/rentACar/rentACar.html";
        // // };
        //
        // insuranceBtn.onclick = function() {
        //     window.location.href = "pages/insurance/insurance.html";
        // }
        //
        // loginBtn.onclick = function () {
        //     //     if (localStorage.getItem("token")) {
        //     //         alert("You are already logged in, logout first");
        //     //         return;
        //     //     }
        //     //     window.location.href = "login.html";
        //     // };
        //     window.location.href = "login.html";
            // };

            // logout.onclick = function () {
            //     if (!localStorage.getItem("token")) {
            //         alert("You are not logged in");
            //         return;
            //     }
            //     localStorage.clear();
            //     alert("Successfully logged out");
            //     window.location.href = "login.html";
            // };
    //
    //     };
    // }}}


function init() {

    // const cookies = document.cookie.split('=');
    // const token = cookies[cookies.length - 1];

    document.getElementById('user').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = '/pages/user/user.html';
    });

    document.getElementById('flight').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = '/pages/flights/flight.html';
    });

    document.getElementById('cargo').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = '/pages/cargo/cargo.html';
    });

    document.getElementById('rentACar').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = 'pages/rentACar/rentACar.html';
    });

    document.getElementById('insurance').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = 'pages/insurance/insurance.html';
    });

    document.getElementById('login').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = 'pages/login/login.html';
    });

    document.getElementById('logout').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = 'pages/login/login.html';
    });
}