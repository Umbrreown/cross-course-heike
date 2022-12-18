async function getItems() {
    let response = await fetch('https://headlesswp.flowerpower.me.uk/wp-json/cocart/v2/products/', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        
    }});

    products = await response.json();
    return products;
};

function getCurrentURL () {
    return window.location.href
};



if (getCurrentURL().includes("movieId=")) {

    document.querySelector('.search-result-text').style.display = "none"; // removes the h1
    
    getItems().then(products => document.querySelector('.main-search-results').innerHTML += products.products[getCurrentURL().slice(-1)].description);

    document.getElementById('movieToRent').style.display = 'block';

    document.getElementById('movieToRent').innerHTML = ``;
    getItems().then(products => document.getElementById('movieToRent').innerHTML += `<h1>${products.products[getCurrentURL().slice(-1)].name}</h1><img src="${products.products[getCurrentURL().slice(-1)].images[0].src.large}" width="200px" height="300px" alt="movie poster"><p>${products.products[getCurrentURL().slice(-1)].prices.price} NOK</p>`);


} else {

    for (let i = 0; i < 6; i++) {
        
        getItems().then(products => document.querySelector('.picture-reel').innerHTML += products.products[i].name);

        getItems().then(products => document.querySelector('.reelPhoto').innerHTML += `<a href="?movieId=${i}"><img src="${products.products[i].images[0].src.thumbnail}"></a>`);
    };
};
    


/* getItems().then(products => document.querySelector('.picture-reel').innerHTML = products.products[0].name);

getItems().then(products => document.querySelector('.reelPhoto').innerHTML += '<img src=' + products.products[0].images[0].src.thumbnail + '>');
 */