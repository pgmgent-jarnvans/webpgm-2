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

let namesPeople = coolPeople.map(person => person.name);

console.log(namesPeople);