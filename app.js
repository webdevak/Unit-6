// Selected variables
const phraseDiv = document.getElementById('phrase');
const qwertyDiv = document.getElementById('qwerty');
const missed = 0;
const overLayDiv = document.querySelector('#overlay');




const startButton = document.querySelector(".btn__reset");
// // Listen for the start game button to be pressed
startButton.addEventListener('click', (e) => {
    const button = e.target;
    if (button) {
    overLayDiv.style.display = 'none';
} else if (missed = 0) {
    overLayDiv.style.display = '';
} else {
    overLayDiv.style.display = '';
}

});


const phrases = [
    'ITS NOT WHAT YOU KNOW BUT WHO YOU KNOW',
    'HOUSTON WE HAVE A PROBLEM',
    'IF AT FIRST YOU DONT SUCCEED TRY TRY AGAIN',
    'A DIME A DOZEN',
    'BACK TO SQUARE ONE'
]


const getRandomPhraseAsArray = arr => {
    // This function randomly chooses a phrase from the phrases array.
    let randomNumber =  Math.floor(Math.random() * arr.length);
    let randomPhrase = phrases[randomNumber];
    let randomCharacters = randomPhrase.split('',);
    return randomCharacters;
}

const phraseArray = getRandomPhraseAsArray(phrases);


//  // adds the letters of a string to the display
const addPhraseToDisplay = arr => {
    
     for (let i = 0; i < phraseArray.length; i++) {
         let characters = phraseArray[i];
         const li = document.createElement('li');
         li.textContent = characters;
         const ul = document.querySelector('#phrase ul');
         if (li.textContent !== " ") {
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
        ul.appendChild(li);
}
}
addPhraseToDisplay(phraseArray);

// // // check if a letter is in the phrase
function checkLetter (button) {
   
    let letters = document.querySelectorAll('.letter')
    let match = '';
    for (let i = 0; i < letters.length; i++) {
        const li = letters[i];
      if (button.textContent === li.textContent.toLowerCase() ) {
       match = li.classList.add('show');
       }  
       return match;
    }
}


const button = document.querySelector('button');

// // // Listen for the onscreen keyboard to be clicked
qwertyDiv.addEventListener('click', (e) => {
    const button = e.target;
    if (button) {
        button.classList.add('chosen')
    }
    const letterFound =  checkLetter(button);
    return letterFound;
     
    

});



// // check if the game has been won or lost
// function checkWin () {
//     const letters = document.querySelectorAll('.letter');
//     const show = document.querySelectorAll('.show');

//     if (letters.length == show.length) {
//         const winOverlay = document.createElement('#OverLay');
//     }

// }


