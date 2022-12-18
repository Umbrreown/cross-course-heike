let products ="";

async function getItems() {
    let response = await fetch('https://headlesswp.flowerpower.me.uk/wp-json/cocart/v2/products/', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        
    }});

    products = await response.json();
    return products;
}

getItems().then(products => document.querySelector('.profile-text-static').innerHTML = products.products[0].description);
//document.querySelector('.profile-text-static').innerHTML = JSON.stringify(products.products[0].description); //This should work

