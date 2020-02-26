const findAdate = (myProfile) => {
  return new Promise((resolve, reject) => {
    // do tinder magic
    let date = {
      isSucces: true,
      dateInfo: { /*...*/},
    }

    if (date.isSucces) resolve(date);
    else reject('geen succes');
  })
}

const doSomethingRomantic = (dateInfo, callback) => {
  let herOrHisFeelings = {
    sheHappy: true,
  }

  callback(herOrHisFeelings);

  return new Promise((resolve, reject) => {
    let herOrHisFeelings = {
      sheHappy: true,
    }

    if (herOrHisFeelings.sheHappy) resolve(herOrHisFeelings);
    else reject('geen succ')
  })
}

const driveHome = (moreEffort) => {

  return new Promise((resolve, reject) => {
    // do tinder magic
    let sleepOver = {
      greatSucces: false,
    }

    if (sleepOver.greatSucces) resolve(sleepOver);
    else reject('geen succes');
  })
  callback(sleepOver);
}

findAdate(myProfile, (date) => {
  if (date.isSucces === true) {
    
    doSomethingRomantic(date.info, (herOrHisFeelings) => {
      if (herOrHisFeelings.sheHappy) {
        driveHome(moreEffort, (sleepOver) => {
          if (sleepOver.greatSucces) console.log('Marry that girl');
          else throw new Error('Meer geduld hebben ;-)')
        })
      } else throw new Error('Je was meer waard')
    })

  } else throw new Error('Verder swipen op het scherm / betere profielfoto');
})

/** callback **/
btn.addEventListener('click', (e) => {
  // dit is een callback-functie
})