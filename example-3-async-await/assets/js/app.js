console.log("JavaScript is working!");

const domElement = document.getElementById("starwars");

/**
 * Example 3
 * Get data from https://swapi.dev/api/people/1/ using Async Await
 */

getSwapiData().then((character) => {
  const ul = document.createElement("ul");
  ul.innerHTML = `<li>${character.name}</li>`;
  domElement.append(ul);
});

/**
 * Async function to get the data from the SWAPI api
 * @returns - returns a promise
 */
async function getSwapiData() {
  try {
    let response = await fetch("https://swapi.dev/api/people/1/");
    let character = await response.json();
    return character;
  } catch (err) {
    console.log(err);
  }
}
