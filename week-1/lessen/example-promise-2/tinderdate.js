const findAdate = (myProfile, callback) => {
  // do tinder magic
  let date = {
    isSucces: true,
    dateInfo: { /*...*/},
  }

  callback(date);
}

const doSomethingRomantic = (dateInfo, callback) => {
  let herOrHisFeelings = {
    sheHappy: true,
  }

  callback(herOrHisFeelings);
}

const driveHome = (moreEffort, callback) => {
  let sleepOver = {
    greatSucces: false,
  }

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