console.log("JavaScript is working!");

/**
 * Example 1
 * Get data from https://swapi.dev/api/people/1/
 */

const domElement = document.getElementById("starwars");

//call to the func tion getSwapiData and handle the Promise
getSwapiData()
  .then((response) => {
    const ul = document.createElement("ul");
    ul.innerHTML = `<li>${response.name}</li>`;
    domElement.append(ul);
  })
  .catch((err) => {
    console.error(err);
  });

// /**
//  * Function to get the data from the SWAPI api
//  * @returns - a promise
//  */
function getSwapiData() {
  return new Promise(function (resolve, reject) {
    //all basics to set up a AJAX request to the SWAPI api
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://swapi.dev/api/people/1/", true);
    xhr.send();
    xhr.onreadystatechange = function () {
      //check to see the response of the server.
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("xhr done successfully");
          var resp = xhr.responseText;
          var respJson = JSON.parse(resp);
          //everything went okay resolve.
          resolve(respJson);
        } else {
          //something went wrong reject.
          reject(xhr.status);
          console.log("xhr failed");
        }
      } else {
        console.log("xhr processing going on");
      }
    };
    console.log("request sent succesfully");
  });
}
