const names = ["1. maaike", "2. FREDERICK", "3. eveLIEN", "4. PhIlIpPe"];
const captalizedNames = names.map(name => {
  name = name.toLowerCase();
  name = name.substring(name.indexOf(' ') + 1);
  name = name.charAt(0).toUpperCase() + name.substring(1);

  return name;
})

console.log(captalizedNames);