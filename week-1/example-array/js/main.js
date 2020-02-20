// with forEach-loop
const mySimpleShoppingCart = [10, 20, 25];
const discountPercentage = 0.2;
let output = [];

mySimpleShoppingCart.forEach((price, index) => {
  output[index] = price - price * discountPercentage;
})

console.log(output);

// with map-function
let outputMap = mySimpleShoppingCart.map(price => price - price * discountPercentage);
console.log(outputMap);

const coolShoppingCart = [
  {
    id: 1,
    price: 56.2,
    type: 'iPhone (prijs per maand)',
  },
  {
    id: 2,
    price: 1.32,
    type: 'Errewèten',
  },
  {
    id: 3,
    price: 35,
    type: 'Smout, vet hespe en spek',
  },
]

const graduaatsKorting = 0.5;

let outputGraduaat = coolShoppingCart.map(item => {
  item.discountPrice = item.price - item.price * graduaatsKorting;
  return item;
});
console.log(outputGraduaat);