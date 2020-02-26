const purchase = {
  article: 'Princess 236023 RVS waterkoker - Inhoud: 1 L - 2200 W',
  brand: 'Princess',
  price: 22.95,
  description: `
    De luxe Princess 236023 Waterkoker is een modern vormgegeven waterkoker met een extra compact formaat en 1L inhoud, speciaal voor kleinere huishoudens. Het snoerloze ontwerp en de drievoudige beveiliging maken de Princess Waterkoker zeer gebruiksvriendelijk. 
  `,
}

// const mapBolcom = new Map();
// mapBolcom.set('article', 'Geschenkset');
// mapBolcom.set('brand', 'Rituals');
// mapBolcom.set('price', 15);
// mapBolcom.set('description', 'daar maak je elke dame blij mee');
// console.log(mapBolcom);

// console.log(mapBolcom.has('amount'));
// console.log(mapBolcom.size);
// // mapBolcom.delete('price');
// // console.log(mapBolcom);
// // mapBolcom.clear();
// // console.log(mapBolcom);

// for ([key, value] of mapBolcom) {
//   console.log(`De key: ${key} heeft als waarde ${value}`);
// }

// console.log(mapBolcom.keys());
// console.log(mapBolcom.values());

let studentArray = ['Louis', 'Yassin', 'Alec', 'Jarne', 'Jarne'];

let studentsOfPGM = new Set();
studentsOfPGM.add('Louis');
studentsOfPGM.add('Yassin');
studentsOfPGM.add('Alec');
studentsOfPGM.add('Jarne');
studentsOfPGM.add('Jarne');

console.log(studentsOfPGM.size);
console.log(studentsOfPGM.has('Selina'));
console.log(studentArray.includes('Selina'));

// function containsKey(key) {
//   if (key in purchase) {
//     return key + ' is aanwezig in dit object';
//   }
//   else {
//     return key + ' is niet aanwezig in dit object';
//   }
// }

// console.log(containsKey('brand'));
// console.log(containsKey('amount'));

// console.log('De lengte van het object is ' + Object.keys(purchase).length);

// delete purchase.price;
// console.log(purchase);

// for (prop in purchase) {
//   delete purchase[prop];
// }

// console.log(purchase);
