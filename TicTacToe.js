class TicTacToe {
    constructor() {
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.currentPlayer = 'X';
        this.winner = null;
    }

    play(x, y) {
        if (this.winner) throw new Error('El juego ya ha terminado');
        if (x < 0 || x > 2) throw new Error('Fuera del eje X');
        if (y < 0 || y > 2) throw new Error('Fuera del eje Y');
        if (this.board[x][y] !== null) throw new Error('Lugar ya ocupado');

        this.board[x][y] = this.currentPlayer;
        this.checkWinner(x, y);

        if (!this.winner) {
            this.currentPlayer = this.currentPlayer === 'X' ? '+' : 'X';
        }
    }

    getCurrentPlayer() {
        return this.currentPlayer;
    }

    getWinner() {
        return this.winner;
    }

    checkWinner(x, y) {
        const player = this.board[x][y];
        const b = this.board;

        // Verificación horizontal y vertical
        let rowWin = true;
        let colWin = true;
        for (let i = 0; i < 3; i++) {
            if (b[x][i] !== player) rowWin = false;
            if (b[i][y] !== player) colWin = false;
        }

        // Verificación diagonal
        let diag1Win = b[0][0] === player && b[1][1] === player && b[2][2] === player;
        let diag2Win = b[0][2] === player && b[1][1] === player && b[2][0] === player;

        if (rowWin || colWin || diag1Win || diag2Win) {
            this.winner = player;
        }
    }
}

module.exports = TicTacToe;