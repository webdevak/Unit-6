// Selected variables
const phraseDiv = document.querySelector('#phrase');
const qwertyDiv = document.querySelector('#qwerty');
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
    'Its not what you know but who you know',
    'Houston We have a problem',
    'If at first you dont succeed try try again',
    'A Dime a Dozen',
    'Back to square one'
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
    let character = '';
    const li = document.createElement('li');
     for (let i = 0; i < arr.length; i++) {
        character += `<li>${arr[i]}</li>`;
    }
    return character;
}
console.log(addPhraseToDisplay(phraseArray));


// // check if a letter is in the phrase
// const checkLetter = buttonClicked  => {
//     buttonClicked.className = 'letter';
//     for (let i = 0; i < buttonClicked.length; i++) {
       
//     }
    
// }


// // Listen for the onscreen keyboard to be clicked
// qwertyDiv.addEventListener('click', (e) => {
//     e.target.button;

// });


// // check if the game has been won or lost
// const checkWin = () => {

// }


