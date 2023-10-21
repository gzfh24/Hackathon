const simArtistContainer = document.querySelector(".sim-art-container");
const submitBtn = document.querySelector("#submit-btn");

const artistInput = document.querySelector("#form-input");

// let link = `https://api.spotify.com/v1/search?q=${artistInput}&type=artist`

// fetch("https://accounts.spotify.com/api/token", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded"
//   },
//   body: "grant_type=client_credentials&client_id=7cd68b30da0c423dabba304bc46ac8ea&client_secret=e3903bf524744be4835f818adf5f64bc"
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error("Error:", error))

let artistID = "";
let token;

fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials&client_id=7cd68b30da0c423dabba304bc46ac8ea&client_secret=e3903bf524744be4835f818adf5f64bc",
  })
    .then((response) => response.json())
    .then((data) => {
        token = data.access_token;
        console.log(token);
    })
    .catch((error) => console.error("Error:", error));

async function bigBoi() {
  console.log(artistInput);

  const response = document.createElement("p");
  response.classList.add("response-text");
  response.innerText = "Check out these similar artists";
  simArtistContainer.appendChild(response);

  async function spotSearch() {
    //change this url later to our link variable
    const url = `https://api.spotify.com/v1/search?q=${artistInput.value}&type=artist`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer  ${token}`
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      // console.log(result.artists.items[0].id);
      artistID = "";
      artistID += result.artists.items[0].id;
    } catch (error) {
      console.error(error);
      console.log('Search ID error')
      const noArtistFound = document.createElement("p");
      noArtistFound.classList.add("sim-artist");
      noArtistFound.innerText = "Artist could not be found";
      simArtistContainer.appendChild(noArtistFound);
    }
  }

  await spotSearch();

  console.log(artistID);

  async function relateSearch() {
    //change this url later to our link variable
    const url = `https://api.spotify.com/v1/artists/${artistID}/related-artists`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer  ${token}`
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      for (let i = 0; i <= 5 && result.artists[i] !== undefined; i++) { // second condition in case there aren't enough similar artists
        //create and append to DOM
        const name = document.createElement("p");
        name.classList.add("sim-artist");
        name.innerText = result.artists[i].name;
        simArtistContainer.appendChild(name);
        // console.log(result.artists[i].name)

        // create and append to DOM
        const url = document.createElement("a");
        url.classList.add("sim-url");
        url.setAttribute("href", result.artists[i].external_urls.spotify);
        url.setAttribute("target", "_blank");
        url.innerText = "Listen Here";
        simArtistContainer.appendChild(url);
        // console.log(result.artists[i].external_urls.spotify)
      }
    } catch (error) {
      console.error(error);
      console.log('Similar artists error')
    }
  }

  await relateSearch();
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  while (simArtistContainer.firstChild) {
    simArtistContainer.removeChild(simArtistContainer.lastChild);
  }
  submitBtn.style.marginBottom = "";
  bigBoi();
});
