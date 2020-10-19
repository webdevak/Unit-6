// Global variables
let missed = 0;
const overLayDiv = document.querySelector('#overlay');
const phraseDiv = document.getElementById('phrase');
const qwerty = document.getElementById('qwerty');
const button = document.querySelector('button');
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Game';
resetButton.id = "reset";
 
    
const startButton = document.querySelector(".btn__reset");
// // Listen for the start game button to be pressed
startButton.addEventListener('click', (e) => {
    const button = e.target;
    if (button) {
    overLayDiv.style.display = 'none';
    }
});

// Phrases
const phrases = [
    'ITS NOT WHAT YOU KNOW BUT WHO YOU KNOW',
    'HOUSTON WE HAVE A PROBLEM',
    'IF AT FIRST YOU DONT SUCCEED TRY TRY AGAIN',
    'A DIME A DOZEN',
    'BACK TO SQUARE ONE'
]


let getRandomPhraseAsArray = arr => {
    // This function randomly chooses a phrase from the phrases array.
    let randomletter =  Math.floor(Math.random() * arr.length);
    let randomPhrase = phrases[randomletter];
    let randomCharacters = randomPhrase.split('',);
    return randomCharacters;
}

let phraseArray = (getRandomPhraseAsArray(phrases));


 // adds the letters of a string to the display ==========================
let addPhraseToDisplay = arr => {
    
     for (let i = 0; i < phraseArray.length; i++) {
        
        let characters = phraseArray[i];
         const li = document.createElement('li');
         li.textContent = characters;
         const ul = document.querySelector('#phrase ul');
       
         if (characters !== ' ') {
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
        ul.appendChild(li);
    }
}
addPhraseToDisplay();

 // check if a letter is in the phrase  ====================
function checkLetter (button) {
   
    let letters = document.querySelectorAll('.letter')
    let match = null;
    for (let i = 0; i < letters.length; i++) {
        const li = letters[i];
      if (button === li.textContent.toLowerCase() ) {
       li.className += ' show';
       match = li.textContent;
       }
    }
        return match   ;
}

checkLetter();

// Listen for the onscreen keyboard to be clicked =====================
qwerty.addEventListener('click', (event) => {
    const button = event.target;
    if (button.tagName === 'BUTTON') {
        button.className = 'chosen';
        button.disabled = 'true';
  
    let letterFound = checkLetter(button.textContent);

    if (letterFound === null) {
    let liveHeart = document.querySelectorAll('.tries');
    let lostHeart = document.querySelectorAll('.tries img');
    let tries = document.querySelectorAll('.tries img');
        tries[missed].src = "images/lostHeart.png";
        missed++;
        } 
    }

    checkWin()
   
});

//  check if the game has been won or lost===================
function checkWin () {
   let liLetters = document.querySelectorAll('.letter');
   let liShow = document.querySelectorAll('.show');
    const lose = '<h2>You Lose</h2>'
    
    if  (liLetters.length === liShow.length) {
        const overLayDiv = document.querySelector('#overlay');
        overLayDiv.classList.remove("start");
        overLayDiv.classList.add("win");
        overLayDiv.innerHTML = `<h2>You Win!!</h2> <h1>The Phrase IS: ${phraseArray.join('')}</h1>
                                <h3>Play Again!</h3>`;
        overLayDiv.style.display = 'flex';
        overLayDiv.appendChild(resetButton);
        resetGame();
    } else if   (missed > 4) {
        overLayDiv.classList.remove("start");
        overLayDiv.classList.add("lose");
        overLayDiv.innerHTML = `${lose} <h1>Try Again!</h1>`;
        overLayDiv.style.display = 'flex';
        overLayDiv.appendChild(resetButton);
        resetGame();
    }

}

// Reset game function ===================================

function resetGame() {
    let keyboard = document.querySelectorAll('.keyrow button');
    let tries = document.querySelectorAll('#scoreboard img');
    let ul = document.querySelector('#phrase ul');

    for (let i = 0; i < keyboard.length; i++) {
        keyboard[i].className = '';
        keyboard[i].disabled = false;
    }
    ul.innerHTML = '';
    phraseArray = (getRandomPhraseAsArray(phrases));
    addPhraseToDisplay(phraseArray);
   
    for (let i = 0; i < tries.length; i++) {
        tries[i].src = "images/liveHeart.png";
    }
    missed = 0;

}

 // Listen for the reset game button to be pressed ===========
resetButton.addEventListener('click', (e) => {
    
      e.target;
    if (e.target = resetButton) {
        overLayDiv.style.display = 'none';
        resetGame();
     }
});

