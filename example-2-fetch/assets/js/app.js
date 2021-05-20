console.log("JavaScript is working!");

const domElement = document.getElementById("starwars");

/**
 * Example 2
 * Get data from https://swapi.dev/api/people/1/ using Fetch API
 */

// function call
getSwapiData();
/**
 * Function to get the data from the Swapi API and deliver it to the DOM
 */
function getSwapiData() {
  fetch("https://swapi.dev/api/people/1/")
    .then((response) => response.json())
    .then((data) => {
      const ul = document.createElement("ul");
      ul.innerHTML = `<li>${data.name}</li>`;
      domElement.append(ul);
    })
    .catch((err) => {
      console.log("something went wrong", err);
    });
}