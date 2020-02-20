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

let studentCars = [
  {
    brand: 'Hyundai',
    model: 'ix20',
    fuel: 'nafte',
    options: ['poepverwarming', 'elektrische ruiten', 'airco'],
  },
  {
    brand: 'BMW',
    model: 'M5',
    fuel: 'nafte',
    options: [],
  },
  {
    brand: 'Skoda',
    model: 'Fabia',
    fuel: 'mazout',
    options: ['rijdt', 'remt', 'rookt'],
  },
  {
    brand: 'Reebok',
    model: 'Sneakers',
    fuel: 'glucose',
    options: ['uitneembare zolen'],
  },
];

function drivesOnGasolineAndHasTwoOptions(shoeCar) {
  return (shoeCar.fuel === 'nafte' && shoeCar.options.length > 1);
}

// studentCars = studentCars.filter(drivesOnGasolineAndHasTwoOptions);
//console.log(studentCars);

let allCars = '';

allCars = studentCars.reduce((accumulator, car, index, array) => {
  accumulator += `${car.brand} ${car.model}`;
  if (index < array.length - 1) accumulator += ', ';
  return accumulator;
}, allCars);

console.log(allCars);

