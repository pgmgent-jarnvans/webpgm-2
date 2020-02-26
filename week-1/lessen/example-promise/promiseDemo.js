let mcDo = new Promise((resolve, reject) => {
  let menu = ['frietjes', 'bruger', 'mayo', 'glaasje fris'];

  if (menu.length >= 4) {
    setTimeout(() => {
      resolve('Jouw menu is klaar');
    }, 5000);
  }
  else {
    reject('Sorry maar we hebben niet alles in huis');
  }
});

mcDo
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error)
  })

fetch('http://api.nobelprize.org/v1/laureate.json?gender=female')
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  })