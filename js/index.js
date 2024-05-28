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
    
    fetchData("characters");
    });
    
    async function fetchData(endpoint) {
    const publicKey = "94837a357034db411a90ddc242f52c4d";
    const privateKey = "d3a8cd714e27f0b93b544ef4a6090e58876ac263";
    const ts = new Date().getTime();
    const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
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
    
    const img = document.createElement("img");
    img.src = `${result.thumbnail.path}/standard_xlarge.${result.thumbnail.extension}`;

    img.alt = endpoint === "characters" ? result.name : result.title;
    
    const details = document.createElement("div");
    details.classList.add("details");
    
    const title = document.createElement("h2");
    title.textContent = endpoint === "characters" ? result.name : result.title;
    
    const description = document.createElement("p");
    description.textContent = result.description ? result.description : "No description available.";
    
    details.appendChild(title);
    details.appendChild(description);
    element.appendChild(img);
    element.appendChild(details);
    
    contentContainer.appendChild(element);
    });
    }