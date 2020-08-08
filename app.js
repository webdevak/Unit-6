const phraseDiv = document.querySelector('#phrase');
const qwertyDiv = document.querySelector('#qwerty');
const missed = 0;
const overLayDiv = document.querySelector('#overlay');



const startButton = document.querySelector(".btn__reset");


const phrases = [
    'Its not what you know but who you know',
    'Nice guys finish last',
    'If at first you dont succeed try try again',
    'They say good things come to those who wait so imma be about an hour late',
    'I shoot at you actors like movie directors'
]


const getRandomPhraseAsArray = arr => {
    // This function randomly chooses a phrase from the phrases array.
    let randomNumber =  Math.floor(Math.random() * arr.length);
    let randomPhrase = phrases[randomNumber];
    
    for (let i = 0; i < randomPhrase.length; i++) {
       return randomPhrase ; 
    }
 
}

console.log(getRandomPhraseAsArray(phrases));


// // adds the letters of a string to the display
// const addPhraseToDisplay = arr => {

// }



// // check if a letter is in the phrase
// const checkLetter = buttonPressed  => {
//     const li = document.querySelector('.tries');
//     const match = '';
    
//     for (let i = 0; i <li.length; i++) {
//         match += li[i];
//     }
// }


// // check if the game has been won or lost
// const checkWin = () => {

// }


// // Listen for the start game button to be pressed
// startButton.addEventListener('click', (e) => {
//     const button = e.target;
//     if (button) {
//     overLayDiv.style.display = 'none';
// } else if (missed = 0) {
//     overLayDiv.style.display = '';
// } else {
//     overLayDiv.style.display = '';
// }

// });



// // Listen for the onscreen keyboard to be clicked
// qwertyDiv.addEventListener('click', (e) => {

// });