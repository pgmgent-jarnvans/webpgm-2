const arrayOfWords = ['pocahontas', 'slim shady', 'marcel dink'];
const complicatedArray = ['bieber', 44, true];

const makeEveryLetterCaps = (words) => {
  return new Promise((resolve, reject) => {
    let capsWords = [];
    capsWords = words.map(word => {
      if (typeof word !== 'string') reject('Deze array bevat niet enkel strings');
      else return word.toUpperCase();
    });
    resolve(capsWords);
  })
}

const sortWords = (words) => {
  return new Promise((resolve, reject) => {
    let sortedWords = [];
    sortedWords = words.sort();
    resolve(sortedWords);
  })
}

const executeAllOperations = (arrayWords) => {
  makeEveryLetterCaps(arrayWords)
  .then((capWords) => {
    return sortWords(capWords);
  })
  .then((sortedWords) => {
    console.log(sortedWords);
  })
  .catch((error) => {
    console.log(error);
  })
}

executeAllOperations(arrayOfWords);
executeAllOperations(complicatedArray);


