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

/*
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
*/










/*document.addEventListener("DOMContentLoaded", function () {
    const charactersLink = document.getElementById("characters-link");
    const comicsLink = document.getElementById("comics-link");
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
    const clearButton = document.getElementById("clear-button");

    charactersLink.addEventListener("click", function (event) {
        event.preventDefault();
        setActiveLink(charactersLink);
        searchInput.value = "";
        fetchData("characters");
    });

    comicsLink.addEventListener("click", function (event) {
        event.preventDefault();
        setActiveLink(comicsLink);
        searchInput.value = "";
        fetchData("comics");
    });

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            searchData(query);
        }
    });

    clearButton.addEventListener("click", function () {
        searchInput.value = "";
        const activeLink = document.querySelector('nav ul li a.active')?.id;
        const endpoint = (activeLink && activeLink.includes('comics')) ? 'comics' : 'characters';
        fetchData(endpoint);
    });

    setActiveLink(charactersLink);
    fetchData("characters");
});

function setActiveLink(activeLink) {
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

async function fetchData(endpoint) {
    showLoading();
    try {
        const publicKey = "94837a357034db411a90ddc242f52c4d";
        const privateKey = "d3a8cd714e27f0b93b544ef4a6090e58876ac263";
        const ts = new Date().getTime();
        const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
        const baseUrl = "http://gateway.marvel.com/v1/public/";

        const response = await fetch(`${baseUrl}${endpoint}?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
        const data = await response.json();

        displayData(data.data.results, endpoint);
    } catch (error) {
        console.error('Error fetching data:', error);
        showError('Failed to fetch data. Please try again later.');
    } finally {
        hideLoading();
    }
}

async function searchData(query) {
    showLoading();
    try {
        const publicKey = "94837a357034db411a90ddc242f52c4d";
        const privateKey = "d3a8cd714e27f0b93b544ef4a6090e58876ac263";
        const ts = new Date().getTime();
        const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
        const baseUrl = "http://gateway.marvel.com/v1/public/";
        const activeLink = document.querySelector('nav ul li a.active')?.id;
        const endpoint = (activeLink && activeLink.includes('comics')) ? 'comics' : 'characters';
        const queryParam = endpoint === 'characters' ? 'nameStartsWith' : 'titleStartsWith';

        const response = await fetch(`${baseUrl}${endpoint}?${queryParam}=${query}&ts=${ts}&apikey=${publicKey}&hash=${hash}`);
        const data = await response.json();

        if (data.data && data.data.results.length > 0) {
            displayData(data.data.results, endpoint);
        } else {
            showError('No results found.');
        }
    } catch (error) {
        console.error('Error searching data:', error);
        showError('Failed to fetch search results. Please try again later.');
    } finally {
        hideLoading();
    }
}

function displayData(results, endpoint) {
    const contentContainer = document.getElementById("content-container");
    contentContainer.innerHTML = "";

    results.forEach(result => {
        const element = document.createElement("div");
        element.classList.add("item");

        const img = document.createElement("img");
        img.src = `${result.thumbnail.path} /standard_xlarge.${result.thumbnail.extension}`;
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

function showLoading() {
    const contentContainer = document.getElementById("content-container");
    contentContainer.innerHTML = '<div class="loading">Loading...</div>';
}

function hideLoading() {
    const loading = document.querySelector(".loading");
    if (loading) {
        loading.remove();
    }
}

function showError(message) {
    const contentContainer = document.getElementById("content-container");
    contentContainer.innerHTML = <div class="error">${message}</div>;
}
*/



document.addEventListener("DOMContentLoaded", function () {
    const charactersLink = document.getElementById("characters-link");
    const comicsLink = document.getElementById("comics-link");
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
    const clearButton = document.getElementById("clear-button");

    charactersLink.addEventListener("click", function (event) {
        event.preventDefault();
        setActiveLink(charactersLink);
        searchInput.value = "";
        fetchData("characters");
    });

    comicsLink.addEventListener("click", function (event) {
        event.preventDefault();
        setActiveLink(comicsLink);
        searchInput.value = "";
        fetchData("comics");
    });

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            searchData(query);
        }
    });

    clearButton.addEventListener("click", function () {
        searchInput.value = "";
        const activeLink = document.querySelector('nav ul li a.active')?.id;
        const endpoint = (activeLink && activeLink.includes('comics')) ? 'comics' : 'characters';
        fetchData(endpoint);
    });

    setActiveLink(charactersLink);
    fetchData("characters");
});

function setActiveLink(activeLink) {
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

async function fetchData(endpoint) {
    showLoading();
    try {
        const publicKey = "94837a357034db411a90ddc242f52c4d";
        const privateKey = "d3a8cd714e27f0b93b544ef4a6090e58876ac263";
        const ts = new Date().getTime();
        const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
        const baseUrl = "http://gateway.marvel.com/v1/public/";

        const response = await fetch(`${baseUrl}${endpoint}?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
        const data = await response.json();

        displayData(data.data.results, endpoint);
    } catch (error) {
        console.error('Error fetching data:', error);
        showError('Failed to fetch data. Please try again later.');
    } finally {
        hideLoading();
    }
}

async function searchData(query) {
    showLoading();
    try {
        const publicKey = "94837a357034db411a90ddc242f52c4d";
        const privateKey = "d3a8cd714e27f0b93b544ef4a6090e58876ac263";
        const ts = new Date().getTime();
        const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
        const baseUrl = "http://gateway.marvel.com/v1/public/";
        const activeLink = document.querySelector('nav ul li a.active')?.id;
        const endpoint = (activeLink && activeLink.includes('comics')) ? 'comics' : 'characters';
        const queryParam = endpoint === 'characters' ? 'nameStartsWith' : 'titleStartsWith';

        const response = await fetch(`${baseUrl}${endpoint}?${queryParam}=${query}&ts=${ts}&apikey=${publicKey}&hash=${hash}`);
        const data = await response.json();

        if (data.data && data.data.results.length > 0) {
            displayData(data.data.results, endpoint);
        } else {
            showError('No results found.');
        }
    } catch (error) {
        console.error('Error searching data:', error);
        showError('Failed to fetch search results. Please try again later.');
    } finally {
        hideLoading();
    }
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

function showLoading() {
    const contentContainer = document.getElementById("content-container");
    contentContainer.innerHTML = '<div class="loading">Loading...</div>';
}

function hideLoading() {
    const loading = document.querySelector(".loading");
    if (loading) {
        loading.remove();
    }
}

function showError(message) {
    const contentContainer = document.getElementById("content-container");
    contentContainer.innerHTML = `<div class="error">${message}</div>`;
}
