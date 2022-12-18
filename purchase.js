fetch("movies.json")
.then(function(resp) {

    return resp.json();

})

.then(function(content) {
    localStorage.setItem("movies", JSON.stringify(content));

    if (!localStorage.getItem("purchase")) {
        localStorage.setItem("purchase", "[]");
    };
});

let movies = JSON.parse(localStorage.getItem("movies"));

let purchase = JSON.parse(localStorage.getItem("purchase"));

let movieToRent = document.getElementById("movieToRent");


if (getCurrentURL().includes("purchase")) {
    movieToRent.innerHTML = ``;
    for (let i = 1; i < purchase.length; i++) {
        movieToRent.innerHTML += `<h1>${purchase[i].name}</h1><img src="${purchase[i].image}" width="200px" height="300px" alt="movie poster"><p>${purchase[i].price} NOK</p>`;
    };
};

function rentMovie(movieId) {

    let movie = movies.find(function(movie) {
        return movie.id == movieId;

    });

    purchase.push(movie);
    localStorage.setItem("purchase", JSON.stringify(purchase));

};

function returnMovie() {

    localStorage.setItem("purchase", "[]");
    purchase = JSON.parse(localStorage.getItem("purchase"));
    movieToRent.innerHTML = ``;

};

function getCurrentURL () {
    return window.location.href
};




