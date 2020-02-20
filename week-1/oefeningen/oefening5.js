let coolPeople = [
  {
      name: "Jim Carrey",
      age: 80
  },
  {
      name: "Samson Verhulst",
      age: 2
  },
  {
      name: "Pommeline",
      age: 5
  },
  {
      name: "K. Rachtpatser",
      age: 15
  },
  {
      name: "Bob Ross",
      age: 100
  }
];

let canWatchTheJoker = coolPeople.map(person => {
  if (person.age >= 15) return `${person.name} mag naar The Joker kijken!!!`;
  return `${person.name} Verhulst is nog te jong!!!`;
})

console.log(canWatchTheJoker);