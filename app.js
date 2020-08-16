// Global variables
const overLayDiv = document.querySelector('#overlay');
const phraseDiv = document.getElementById('phrase');
const qwerty = document.getElementById('qwerty');
let missed = 0;
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
} else if (missed > 4) {
    overLayDiv.style.display = flex;
} else {
    overLayDiv.style.display = overLayDiv;
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
       } else {
           null;
       }
    }
    return match;
}



// // // Listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', (event) => {
    const letter = document.querySelector('button');
    const div = qwerty.querySelector('div.keyrow');
        const button = event.target;

    if (button.tagName === 'BUTTON') {
        button.classList.add('chosen');
    } 
    if (button.className === 'chosen') {
        button.disabled = true;
    }
    if (button.className === 'keyrow' ){
        button = false;
    }
    

    const img = document.querySelector('img');
    const letterFound = checkLetter(button);
    let liHeart = document.querySelector(".tries > img[src= 'images/liveHeart.png']");
    

    if (button.buttons !== letterFound) {
        liHeart.setAttribute("src", "images/lostHeart.png");
        missed++;
        } 

    checkWin();
    return letterFound; 
});



// // // check if the game has been won or lost
function checkWin () {
    const letters = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    const liLetters = letters;
    const liShow = show;
    
    if  (liLetters.length === liShow.length) {
        const overLayDiv = document.querySelector('#overlay');
        overLayDiv.classList.remove("start");
        overLayDiv.classList.add("win");
        overLayDiv.innerHTML = `<h1>You Win the letters were: ${phraseArray}</h1>`;
        overLayDiv.style.display = 'flex';
        overLayDiv.appendChild(resetButton);
    } else if   (missed > 4) {
        overLayDiv.classList.remove("start");
        overLayDiv.classList.add("lose");
        overLayDiv.innerHTML = "<h1>You Lose</h1>";
        overLayDiv.style.display = 'flex';
        overLayDiv.appendChild(resetButton);

    }

}


// // // Listen for the reset game button to be pressed
resetButton.addEventListener('click', (e) => {
    
      e.target;
    if (e.target = resetButton) {
        location.reload();
     }
});

