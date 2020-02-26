const pokeBaseURI = 'https://pokeapi.co/api/v2/pokemon/';
const giphyAPIKEY = 'xTq8h528acVbeYB11JEJhzPkcBlOPNPn'
const giphyURI = `https://api.giphy.com/v1/gifs/search?api_key=${giphyAPIKEY}`;

// fetch magic

function getRandomPokemonId() {
  return new Promise((resolve, reject) => {
    fetch(pokeBaseURI)
    .then((response) => {
      // omzetten naar json
      return response.json();
    })
    .then((data) => {
      const amountOfPokemon = data.count;
      let randomID = Math.floor(Math.random() * amountOfPokemon);
      resolve(randomID);
    })
    
    .catch((error) => {
      // Er ging iets mis
      reject(error);
    })
  })
}

function getRandomPokemonName(id) {
  return new Promise((resolve, reject) => {
    fetch(pokeBaseURI + id)
      .then((response) => {
        // omzetten naar json
        return response.json();
      })
      .then((data) => {
        const currentPokemon = data;
        resolve(currentPokemon.name);
      })
      
      .catch((error) => {
        // Er ging iets mis
        reject(error);
      })
    })
}

function getPokemonGifs(pokemonName) {
  return new Promise((resolve, reject) => {
    fetch(giphyURI + '&q=' + pokemonName + '&limit=1')
      .then((response) => {
        // omzetten naar json
        return response.json();
      })
      .then((data) => {
        const gifs = data;
        if (gifs.data.length > 0) {
          const gifURL = gifs.data[0].images.downsized_large.url;
          resolve(gifURL);
        } else {
          reject('Geen gif gevonden');
        }
      })
      
      .catch((error) => {
        // Er ging iets mis
        reject(error);
      })
  })
}

function getRandomPokemonName(id) {
  return new Promise((resolve, reject) => {
    fetch(pokeBaseURI + id)
      .then((response) => {
        // omzetten naar json
        return response.json();
      })
      .then((data) => {
        const currentPokemon = data;
        resolve(currentPokemon.name);
      })
      
      .catch((error) => {
        // Er ging iets mis
        reject(error);
      })
  })
}

getRandomPokemonId()
  .then((id) => {
    console.log(id);
    return getRandomPokemonName(id);
  })
  .then((name) => {
    console.log(name);
    document.querySelector('#name').innerText = name;
    return getPokemonGifs(name);
  })
  .then((gif) => {
    document.querySelector('#gif-wrapper').innerHTML = `
      <img src="${gif}" alt="Pokemon">
    `;

    // vreugdedansje
    console.log(gif);
  })
  .catch((error) => {
    console.log(error);
  })
  
