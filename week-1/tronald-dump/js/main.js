const quotes = [];

function fetchDataByUrl (url, format) {
  let xhr = new XMLHttpRequest();
  xhr.responseType = format;
  xhr.open('GET', url);
  xhr.send();

  xhr.onerror = () => {
    console.log('Marie-Jean, tè ni helukt ni');
  }

  xhr.onprogress = (event) => {
    console.log('ejje ohenbliksje');
  }

  xhr.onload = () => {
    console.log('Marie-Jean! tè helukt');

    let status = xhr.status;
    console.log(status);

    if (status == 200) {
      let result = xhr.response;
      createQuoteList(result);
    }
    else {
      console.log('Steeksje de paarden weer op stal?')
    }
  }
}

function createQuoteList (result) {
  if (quotes.length < 5) {
    quotes.push(result);
    fetchDataByUrl('https://www.tronalddump.io/random/quote', 'json');
  }
  else {
    generateUiForQuotes()
  }
}

function formatDate (dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${ addZeros(day) }/${ addZeros(month + 1) }/${ year } | ${ addZeros(hours) }:${ addZeros(minutes) }`;
}

function addZeros (value) {
  return value < 10 ? '0' + value : value;
}

function getTags (tags) {
  let tempStr = '';
  tags.forEach(tag => {
    tempStr += `
      <p>${ tag }</p>
    `
  });

  return tempStr;
}

function generateUiForQuotes () {
  const quotesEl = document.querySelector('.quotes');
  let tempStr = '';

  quotes.forEach(quote => {
    tempStr += `
      <a class="quote" href="${ quote._embedded.source[0].url }" target="_blank">
        <div class="quote_info">
          <h2 class="">${ quote._embedded.author[0].name }</h2>
          <span class="">${ formatDate(quote.appeared_at) }</span>
        </div>
        <div class="quote_content">
          <div class="quote_content-text">
            <i class="fas fa-quote-left"></i>
            <p>${ quote.value }</p>
          </div>
          <div class="quote_content-tags">
            ${ getTags(quote.tags) }
          </div>
        </div>
      </a>
    `;
  })

  quotesEl.innerHTML = tempStr;
}

fetchDataByUrl('https://www.tronalddump.io/random/quote', 'json');