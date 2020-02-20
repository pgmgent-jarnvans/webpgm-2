const purchase = {
  article: 'Princess 236023 RVS waterkoker - Inhoud: 1 L - 2200 W',
  brand: 'Princess',
  price: 22.95,
  description: `
    De luxe Princess 236023 Waterkoker is een modern vormgegeven waterkoker met een extra compact formaat en 1L inhoud, speciaal voor kleinere huishoudens. Het snoerloze ontwerp en de drievoudige beveiliging maken de Princess Waterkoker zeer gebruiksvriendelijk. 
  `,
}

function containsKey(key) {
  if (key in purchase) {
    return key + ' is aanwezig in dit object';
  }
  else {
    return key + ' is niet aanwezig in dit object';
  }
}

console.log(containsKey('brand'));
console.log(containsKey('amount'));

console.log('De lengte van het object is ' + Object.keys(purchase).length);

delete purchase.price;
console.log(purchase);

for (prop in purchase) {
  delete purchase[prop];
}

console.log(purchase);
