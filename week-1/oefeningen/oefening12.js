const compareNumbers = (someCoolNumber) => {
  return new Promise((resolve, reject) => {
    //compare to number 10
    setTimeout(() => {
      if (someCoolNumber < 10) resolve(`${someCoolNumber} is kleiner dan 10`);
      else resolve(`${someCoolNumber} is groter dan of gelijk aan 10`);
    }, 10000)
  })
}

compareNumbers(8)
  .then((result) => {
    console.log(result);

    return compareNumbers(16);
  })
  .then((result) => {
    console.log(result);

    return compareNumbers(10);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
