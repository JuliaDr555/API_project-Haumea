/*const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=94837a357034db411a90ddc242f52c4d&hash=7bbc09791bdd1e417a85bd43c54b7daf", requestOptions)
  .then((response) => response.text())
  .then((result) => {
    const data = JSON.parse(result);
    console.log("data ===> ", data)
  })
  .catch((error) => console.error(error));



  async function getAllPages(urls) {
    const promiseList = urls.map(text => fetch(text).then(r => r.json().catch(err => console.log(err))));
    const finalResult = await Promise.all(promiseList).then(result => {
        let finalList = []
        result.forEach(res => {
            finalList = finalList.concat(res.results);
        });
        console.log("finalList: ", finalList);
        for (let character of finalList) {
            let characterElt = document.createElement("div");
            characterElt.className = 'character';
            // add a header with the person's name
            characterHeader = document.createElement("h2");
            characterHeader.innerText = character.name;
            characterElt.appendChild(characterHeader);
            characterContainer.appendChild(characterElt);
        }
        return finalList
    });
    //console.log(finalResult);
    //console.log(finalResult.length);
}
*/

document.addEventListener("DOMContentLoaded", function () {
    const charactersLink = document.getElementById("characters-link");
    const comicsLink = document.getElementById("comics-link");
    
    charactersLink.addEventListener("click", function (event) {
        event.preventDefault();
        fetchData("characters");
    });
    
    comicsLink.addEventListener("click", function (event) {
        event.preventDefault();
        fetchData("comics");
    });
    
    // Initial load
    fetchData("characters");
});

async function fetchData(endpoint) {
    const publicKey = "94837a357034db411a90ddc242f52c4d";
    const privateKey = "d3a8cd714e27f0b93b544ef4a6090e58876ac263";
    const ts = new Date().getTime();
    const hash = md5(ts + privateKey + publicKey);
    const baseUrl = "http://gateway.marvel.com/v1/public/";

    const response = await fetch(`${baseUrl}${endpoint}?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
    const data = await response.json();

    displayData(data.data.results, endpoint);
}

function displayData(results, endpoint) {
    const contentContainer = document.getElementById("content-container");
    contentContainer.innerHTML = "";

    results.forEach(result => {
      const element = document.createElement("div");
      element.classList.add("item");
      if (endpoint === "characters") {
          element.textContent = result.name;
      } else if (endpoint === "comics") {
          element.textContent = result.title;
      }
      contentContainer.appendChild(element);
  });
}