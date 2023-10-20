
  
const simArtistContainer = document.querySelector('.sim-art-container');

// const artistInput = document.querySelector('#form-input').value;

// let link = `https://api.spotify.com/v1/search?q=${artistInput}&type=artist`

let artistID = "";

async function bigBoi() {

    async function spotSearch() {
    //change this url later to our link variable
        const url = 'https://api.spotify.com/v1/search?q=madonna&type=artist';
        const options = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer  BQDy0htm5Z9qIH5qcsZDfnzxMAKTnzhf548gZiJ_3cEY6fdG3vqAVkoE0-DzXdLhzKFXnVf_IesKAeNwJdaQqcuwNE-SoU2rlcy2snoZl5VC6NHnFyc'
                // 'X-RapidAPI-Key': '722509c4c2mshb2186d787c1df4ep1431e5jsne472d0a1e0a7',
                // 'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // console.log(result);
            // console.log(result.artists.items[0].id);
            artistID += result.artists.items[0].id;
        } catch (error) {
            console.error(error);
        }
    }

    await spotSearch()

    console.log(artistID)

    async function relateSearch() {
    //change this url later to our link variable
        const url = `https://api.spotify.com/v1/artists/${artistID}/related-artists`;
        const options = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer  BQDy0htm5Z9qIH5qcsZDfnzxMAKTnzhf548gZiJ_3cEY6fdG3vqAVkoE0-DzXdLhzKFXnVf_IesKAeNwJdaQqcuwNE-SoU2rlcy2snoZl5VC6NHnFyc'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // console.log(result);
            for (let i = 0; i <= 5; i++){
            
            //create and append to DOM
            const name = document.createElement('p');
            name.classList.add('sim-artist')
            name.innerText = result.artists[i].name
            simArtistContainer.appendChild(name);
            // console.log(result.artists[i].name)
            
            // create and append to DOM
            const url = document.createElement('a');
            url.classList.add('sim-url')
            url.setAttribute('href', result.artists[i].external_urls.spotify)
            url.innerText = 'Check them out!';
            simArtistContainer.appendChild(url);
            // console.log(result.artists[i].external_urls.spotify)
            }

        } catch (error) {
            console.error(error);
        }
    }

    await relateSearch()

}

bigBoi()
