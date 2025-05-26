
async function getRandomCoffee(type){ 
    const url1 = `https://api.sampleapis.com/coffee/${type}` 
    try { 
        const resp = await fetch(url1); //awaiting fetch call from API
        const coffees = await resp.json(); //receiving data from API

        if(coffees.length === 0){
            throw new Error("No coffee data available at this moment due to the server")
        }

        const randomIndex = Math.floor(Math.random()* coffees.length); //random index of coffee in the api resp.json()
        const coffee = coffees[randomIndex]; //using randomIndex to give a randomcoffee

        displayCoffee(coffee); 

    }catch(error) {
        document.getElementById('coffeeDisplay').innerText = "Error: " + error.message; 
    }
}


//creating function to display coffee details on the page
function displayCoffee(coffee){
    const container = document.getElementById('coffeeDisplay'); //using the div to display the random coffee
    container.innerHTML =  //used to create different tags in the container to display the information
        `<h2>${coffee.title}</h2> 
        <img src="${coffee.image}" alt="${coffee.title}" width="200"/>
        <p id="coffee-description">${coffee.description}</p>
    `;
}

// Add event listeners to buttons to call function and make sure button is linked to the type that we will be requesting from the API
document.getElementById('hotButton').addEventListener('click', () => {
  getRandomCoffee('hot');
});

document.getElementById('coldButton').addEventListener('click', () => {
  getRandomCoffee('iced'); //corrected from cold to iced
});