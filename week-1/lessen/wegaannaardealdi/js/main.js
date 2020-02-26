let d = document;

const article = d.getElementById('boodschap');
const category = d.getElementById('category');
const btn = d.getElementById('addToCart');

let littleGreenBag = [];

btn.addEventListener('click', (e) => {
  let userArticle = article.value;
  let userCategory = category.value;

  console.log(userArticle);
  console.log(userCategory);

  littleGreenBag.push({
    'category': userCategory,
    'article': userArticle,
  })

  addToStorage();
});

function addToStorage() {
  console.log(littleGreenBag);
  window.localStorage.setItem('cart', JSON.stringify(littleGreenBag));
}

logCartContents();
function logCartContents() {
  let storageBag = window.localStorage.getItem('cart');
  if (storageBag) littleGreenBag = JSON.parse(storageBag);
  console.log(littleGreenBag);
}