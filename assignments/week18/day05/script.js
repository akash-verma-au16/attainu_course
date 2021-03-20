class UI {
    static showStatus(id) {
        document.getElementById('toggle-1').classList.toggle("show");
        document.getElementById('toggle-2').classList.toggle("show");
        gameStart.clicks += 1;

        GameEngine.updateBoard(id.split(','));

        if(gameStart.clicks === 9) {
            GameEngine.checkGameOver();
            if(gameStart.result === 'tie') {
                UI.declareTie();
            };
        } else if(gameStart.clicks > 4) {
            GameEngine.checkGameOver();
        };
    };

    static declareWinner(winner) {
        gameStart.result = 'winner';
        GameLoop.disable();

        const finalMessage = document.querySelector('.final-message');
        finalMessage.classList.remove('show');
        finalMessage.innerHTML = `
            <h3 class="alert alert-success p-5 text-uppercase">
                ${winner} is the Winner!!
            </h3>`;
        
        const btn = document.createElement('a');
        btn.className = 'btn btn-lg px-5 py-3 btn-info rounded-pill border border-success border-3';
        btn.setAttribute('href', 'index.html');
        btn.appendChild(document.createTextNode('Play Again'))
        finalMessage.appendChild(btn);
    };

    static declareTie(){
        GameLoop.disable();

        const finalMessage = document.querySelector('.final-message');
        finalMessage.classList.remove('show');
        finalMessage.innerHTML = `
            <h3 class="alert alert-danger text-uppercase p-5">
                Its a TIE!!
            </h3>`;

        const btn = document.createElement('a');
        btn.className = 'btn btn-lg px-5 py-3 btn-info rounded-pill border border-success border-3';
        btn.setAttribute('href', 'index.html');
        btn.appendChild(document.createTextNode('Play Again'))
        finalMessage.appendChild(btn);
    };
};

class GameEngine {
    static checkGameOver() {
        let row = GameEngine.checkAllRows(),
            col = GameEngine.checkAllColumns(),
            diag = GameEngine.checkDiagonals();

        if(row[0] === 'true') {
            UI.declareWinner(row[1]);
        } else if(col[0] === 'true') {
            UI.declareWinner(col[1]);
        } else if(diag[0] === 'true') {
            UI.declareWinner(diag[1]);
        };
    };

    static updateBoard(location) {
        let insert;
        if(gameStart.turn === 'player-2') {
            insert = 'x';
        } else {
            insert = 'o';
        };
        gameStart.gameBoard[parseInt(location[0])][parseInt(location[1])] = insert;
    };

    static checkAllRows() {
        for(let i = 0; i < 3; i++) {
            let countX = 0,
                countO = 0;

            for(let j = 0; j < 3; j++) {
                if(gameStart.gameBoard[i][j] == 'x') {
                    countX++;
                } else if(gameStart.gameBoard[i][j] == 'o') {
                    countO++;
                };
            };

            if(countX === 3) {
                return ['true', 'player-1'];
            } else if(countO === 3) {
                return ['true', 'player-2'];
            };
        };
        return ['', ''];
    };

    static checkAllColumns() {
        for(let j = 0; j < 3; j++) {
            let countX = 0,
                countO = 0;

            for(let i = 0; i < 3; i++) {
                if(gameStart.gameBoard[i][j] == 'x') {
                    countX++;
                } else if(gameStart.gameBoard[i][j] == 'o') {
                    countO++;
                };
            };

            if(countX === 3) {
                return ['true', 'player-1'];
            } else if(countO === 3) {
                return ['true', 'player-2'];
            };
        };
        return ['', ''];
    };

    static checkDiagonals() {
        let countX = 0,
            countO = 0,
            countX2 = 0,
            countO2 = 0;

        for(let j = 0; j < 3; j++) {
            if(gameStart.gameBoard[j][j] == 'x') {
                countX++;
            } else if(gameStart.gameBoard[j][j] == 'o') {
                countO++;
            };
        };

        let row = 0;
        for(let col = 2; col > -1; col--) {
            if(gameStart.gameBoard[row][col] == 'x') {
                countX2++;
                row++;
            } else if(gameStart.gameBoard[row][col] == 'o') {
                countO2++;
                row++;
            };
        };

        if(countX === 3 || countX2 === 3) {
            return ['true', 'player-1'];
        } else if(countO === 3 || countO2 === 3) {
            return ['true', 'player-2'];
        } else {
            return ['', ''];
        };
    };
};

class GameLoop {
    constructor() {
        this.turn = 'player-1';
        this.disabled = [];
        this.clicks = 0;
        this.gameBoard = [[undefined, undefined, undefined], 
                          [undefined, undefined, undefined], 
                          [undefined, undefined, undefined]];
        this.result = 'tie';
    };

    enter(e) {
        if(gameStart.turn === 'player-1') {
            e.target.innerText = 'X';
        } else {
            e.target.innerText = 'O';
        };
    };
    
    exit(e) {
        e.target.innerText = '';
    };

    select(e) {
        if(gameStart.turn === 'player-1') {
            gameStart.turn = 'player-2';
            e.target.className = 'box red';
        } else {
            gameStart.turn = 'player-1';
            e.target.className = 'box green';
        };
        gameStart.disabled.push(e.target);
    };

    static disable() {
        document.querySelectorAll('.box').forEach((box) => {
            box.classList.add('disable');
        });

        document.querySelectorAll('.card').forEach((box) => {
            box.classList.add('disable');
        });
    };
};

const gameStart = new GameLoop();

document.querySelector('#game-ui').addEventListener('mouseover', (e) => {
    if(e.target.classList.contains('box') && !gameStart.disabled.includes(e.target) && gameStart.result !== 'winner') {
        gameStart.enter(e);
    };
});

document.querySelector('#game-ui').addEventListener('mouseout', (e) => {
    if(e.target.classList.contains('box') && !gameStart.disabled.includes(e.target) && gameStart.result !== 'winner') {
        gameStart.exit(e);
    };
});

document.querySelector('#game-ui').addEventListener('click', (e) => {
    if(e.target.classList.contains('box') && !gameStart.disabled.includes(e.target) && gameStart.result !== 'winner') {
        gameStart.select(e);
        UI.showStatus(e.target.id);
    };
});
