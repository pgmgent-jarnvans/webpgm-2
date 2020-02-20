let veejayTony = {
  actor: 'Bart De Pauw',
  hairColor: 'Bruin met krullen',
  quote: 'Okidoki, pianosimokie, miauwkes!',
  likes: 'de vrouwtjes',
  age: 37,
};

// for-loop

const lengthOfVJTony = Object.keys(veejayTony).length;
const vjKeys = Object.keys(veejayTony);
const vjValues = Object.values(veejayTony);

console.log(vjKeys);
console.log(vjValues);

let unorderedList = '<ul>';
for (let i = 0; i < lengthOfVJTony; i++) {
  let listItem = `
    <li><strong>${vjKeys[i]}</strong>: ${vjValues[i]}</li>
  `;

  unorderedList += listItem;
}

unorderedList += '</ul>';

document.body.innerHTML = unorderedList;

// end for loop
// for of / for in

let orlandoBloom = {
  actor: 'Orlando Bloom',
  hairColor: 'Megaschone krullen',
  quote: ['LOTR', 'Pirates Of The Caribbean', 'Carnival Row'],
  like: 'Selina, Romanie, Elien en Nina',
  age: 43 // maar hij ziet er veel jonger uit
}

let unorderedList2 = '<ul>';
for (let prop in orlandoBloom) {
  let listItem = `
    <li><strong>${prop}</strong>: ${orlandoBloom[prop]}</li>
  `;

  unorderedList2 += listItem;
}

unorderedList2 += '</ul>';

document.body.innerHTML += unorderedList2;