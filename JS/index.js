
async function getRandomCoffee(type){
    const url1 = `https://api.sampleapis.com/coffee/${type}`
    try { 
        const res = await fetch(url1); //awaiting fetch call from API
        const coffees = await resp.json(); //receiving data from API

        const randomIndex = Math.floor(Math.random()* coffees.length);
        const coffee = coffees[randomIndex];

        displayCoffee(); //displayCoffee

    }catch(error) {
        document.getElementById('coffeeDisplay').innerText = "Error: " + error.message
    }
}


//creating function to display coffee details on the page
function displayCoffee(coffee){
    const container = document.getElementById('coffeeDisplay');
    container.innerHTML =  
        `<h2>${coffee.title}</h2>
        <img src="${coffee.image}" alt="${coffee.title}" width="200"/>
        <p>${coffee.description}</p>
    `;
}

// Add event listeners to buttons
document.getElementById('hotButton').addEventListener('click', () => {
  getRandomCoffee('hot');
});

document.getElementById('coldButton').addEventListener('click', () => {
  getRandomCoffee('cold');
});