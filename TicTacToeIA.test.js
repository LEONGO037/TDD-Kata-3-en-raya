const TicTacToe = require('./TicTacToe');

describe('TicTacToe Kata', () => {
    let game;

    beforeEach(() => {
        game = new TicTacToe();
    });

    describe('Requerimiento 1: Colocación de piezas en tablero 3x3', () => {
        it('debe lanzar una excepción si la pieza está fuera del eje X (menor a 0)', () => {
            expect(() => {
                game.play(-1, 1);
            }).toThrow();
        });

        it('debe lanzar una excepción si la pieza está fuera del eje X (mayor a 2)', () => {
            expect(() => {
                game.play(3, 1);
            }).toThrow();
        });

        it('debe lanzar una excepción si la pieza está fuera del eje Y (menor a 0)', () => {
            expect(() => {
                game.play(1, -1);
            }).toThrow();
        });

        it('debe lanzar una excepción si la pieza está fuera del eje Y (mayor a 2)', () => {
            expect(() => {
                game.play(1, 3);
            }).toThrow();
        });

        it('debe lanzar una excepción si el lugar ya está ocupado', () => {
            game.play(0, 0);
            expect(() => {
                game.play(0, 0);
            }).toThrow();
        });
    });

    describe('Requerimiento 2: Determinar turnos', () => {
        it('el primer turno siempre debe ser de "X"', () => {
            expect(game.getCurrentPlayer()).toBe('X');
        });

        it('si el último turno fue "X", el siguiente debe ser "+"', () => {
            game.play(0, 0); // Juega X
            expect(game.getCurrentPlayer()).toBe('+');
        });

        it('si el último turno fue "+", el siguiente debe ser "X"', () => {
            game.play(0, 0); // Juega X
            game.play(1, 0); // Juega +
            expect(game.getCurrentPlayer()).toBe('X');
        });
    });

    describe('Requerimiento 3: Victoria', () => {
        it('no debe declarar ganador si no hay una línea conectada', () => {
            game.play(0, 0); // X
            game.play(1, 0); // +
            game.play(0, 1); // X
            game.play(1, 1); // +
            expect(game.getWinner()).toBeNull();
        });

        it('un jugador gana si ocupa toda una línea horizontal', () => {
            game.play(0, 0); // X
            game.play(1, 0); // +
            game.play(0, 1); // X
            game.play(1, 1); // +
            game.play(0, 2); // X completa la fila 0
            expect(game.getWinner()).toBe('X');
        });

        it('un jugador gana si ocupa toda una línea vertical', () => {
            game.play(0, 0); // X
            game.play(0, 1); // +
            game.play(1, 0); // X
            game.play(1, 1); // +
            game.play(2, 0); // X completa la columna 0
            expect(game.getWinner()).toBe('X');
        });

        it('un jugador gana si ocupa toda una línea diagonal', () => {
            game.play(0, 0); // X
            game.play(0, 1); // +
            game.play(1, 1); // X
            game.play(1, 0); // +
            game.play(2, 2); // X completa la diagonal principal
            expect(game.getWinner()).toBe('X');
        });

        it('un jugador gana si ocupa toda la diagonal secundaria', () => {
            game.play(0, 2); // X
            game.play(0, 1); // +
            game.play(1, 1); // X
            game.play(1, 0); // +
            game.play(2, 0); // X completa la diagonal secundaria
            expect(game.getWinner()).toBe('X');
        });
    });
});