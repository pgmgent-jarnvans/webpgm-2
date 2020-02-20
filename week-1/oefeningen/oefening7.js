const names = ['Romanie', 'Alec', 'Nina', 'Kin', 'Maaike', 'Carmen', 'Kamiel', 'Matthieu', 'Emanuel'];
const maNames = names.filter(name => name.includes('ma') || name.includes('Ma'));

console.log(maNames);