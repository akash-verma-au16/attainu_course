class UI {
    static alertMessageUI = document.querySelector('#alert-message');
    static wordUI = document.querySelector('#word-ui');
    static keyboardUI = document.querySelector('#keyboard');
    static keyUI = document.querySelectorAll('.key');
    static winsUI = document.querySelector('#wins');
    static lossesUI = document.querySelector('#losses');
    static imageUI = document.querySelector('.img-fluid');
    static imgageCount = 1;
    static correctUI;


    static resetGameUI() {
        UI.keyUI.forEach(key => key.className = 'key');
        UI.keyboardUI.style.opacity = '1';
        startNewGame.chancesLeft = 8;
        UI.imgageCount = 1;
        
        UI.alertMessageUI.textContent = 'guess the word ??';
        UI.alertMessageUI.className = 'alert alert-info p-3';
        
        UI.wordUI.textContent = '';
        for(let i = 0; i < startNewGame.newWord.length; i++) {
            UI.wordUI.textContent += '__ ';
        };
        UI.correctUI = startNewGame.newWord.toUpperCase();
        UI.imageUI.setAttribute('src', 'img/1.png')
    };

    static gameOver() {
        UI.winsUI.textContent = startNewGame.wins;
        UI.lossesUI.textContent = startNewGame.losses;
        UI.keyboardUI.style.opacity = '0.8';
        UI.keyUI.forEach(key => key.className += ' disabled');
    };

    static win() {
        UI.alertMessageUI.textContent = 'You win!!';
        UI.alertMessageUI.className = 'alert alert-success p-3';
        startNewGame.wins++;
        UI.gameOver();
    };

    static lose() {
        UI.wordUI.textContent = `Correct : ${UI.correctUI}`;
        UI.alertMessageUI.textContent = `You lose!!`;
        UI.alertMessageUI.className = 'alert alert-danger p-3';
        startNewGame.losses++;
        UI.gameOver();
    };

    static colourizeKey(key) {
        if(startNewGame.keyStatus) key.className += ' text-success';
            else key.className = ' text-danger';
    };
    
    static changeIMG() {
        UI.imageUI.setAttribute('src', `img/${++UI.imgageCount}.png`)
    };

    static chanceStatus() {
        UI.alertMessageUI.textContent = `chances left : ${startNewGame.chancesLeft}`;
        UI.alertMessageUI.className = 'alert alert-secondary p-3';
    };
};

class Game {
    constructor() {
        this.wins = 0;
        this.losses = 0;
        this.chancesLeft = 8;
        this.keyStatus = false;
        this.words = ['table','tea','cup','dog','park','chair',
                      'pipe','wand','beer','lizard','book', 'worm',
                      'bat','buzz','cot','crypt', 'cycle','date',
                      'mat','sip','ping','dust','fake','fish', 'hook',
                      'fix','flap','buff','fun','glad','tip', 'care',
                      'create', 'danger', 'javascript','code', 'cheese']
        this.newWord = this.words[Math.floor(Math.random() * this.words.length)];
    };

    newGame() {
        startNewGame.newWord = startNewGame.words[Math.floor(Math.random() * startNewGame.words.length)];
        console.log(startNewGame.newWord);
        UI.resetGameUI();
    };

    checkInNewWord(key) {
        let word = startNewGame.newWord.split('');
        if(word.indexOf(key) === -1) {
            startNewGame.keyStatus = false;
            startNewGame.chancesLeft--;
            
            UI.changeIMG();
            UI.chanceStatus();
            if(startNewGame.chancesLeft === 0) UI.lose();
        }; 
        while(word.indexOf(key) !== -1) {
            let i = word.indexOf(key);
            word[i] = '_';
            startNewGame.newWord = word.join('');
            
            let strUI = UI.wordUI.textContent.split(' ');
            strUI[i] = key.toUpperCase();
            
            startNewGame.keyStatus = true;
            UI.wordUI.textContent = strUI.join(' ');
            UI.chanceStatus();
        };
        if(UI.wordUI.textContent.split(' ').join('') === UI.correctUI) UI.win();
    };

    loadAllEventListeners() {
        addEventListener('DOMContentLoaded', UI.resetGameUI());
        document.querySelector('.btn').addEventListener('click', startNewGame.newGame);
        document.querySelector('#keyboard').addEventListener('click', (e) => {
            if(e.target.className === 'key') {
                startNewGame.checkInNewWord(e.target.textContent);
                UI.colourizeKey(e.target);
            };
        });
    };
};


const startNewGame = new Game();
startNewGame.loadAllEventListeners();

