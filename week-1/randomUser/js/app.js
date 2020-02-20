const urlJSON = 'https://randomuser.me/api?nat=nl&format=json';
const urlXML = 'https://randomuser.me/api?nat=nl&format=xml';

// get data from Random User API
let fetchDataFromUrl = (url, format) => {
  // request declareren
  let xhr = new XMLHttpRequest();

  // welk formaat willen we terugkrijgen
  xhr.responseType = format;

  // request beschrijven
  xhr.open('GET', url);

  // request versturen
  xhr.send();

  xhr.onerror = () => {
    console.log('Marie-Jean, tè ni helukt ni');
  }

  xhr.onprogress = (event) => {
    console.log('ejje ohenbliksje');
  }

  xhr.onload = () => {
    console.log('Marie-Jean! tè helukt');

    // de status opvragen
    let status = xhr.status;
    console.log(status);

    if (status == 200) {
      // stapsje verder
      let result = xhr.response;
      console.log(result);

      addToDom(result);
    }
    else {
      console.log('Steeksje de paarden weer op stal?')
    }
  }
}

fetchDataFromUrl(urlXML, 'document');


function addToDom(result) {
  const firstName = result.querySelector('name first');
  const image = result.querySelector('picture large');
  const location = result.querySelector('location city');
  const age = result.querySelector('dob age');
  const email = result.querySelector('email');
  console.log(firstName);
  let person = `
    <div>
      <img src="${image.innerHTML}">
      <h3>${firstName.innerHTML}</h3>
      <p>${location.innerHTML}</p>
      <p>${age.innerHTML}</p>
      <p>${email.innerHTML}</p>
    </div>
  `

  document.querySelector('#XMLUser').innerHTML = person;
}
