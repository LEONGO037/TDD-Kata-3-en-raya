const TicTacToe = require('./TicTacToe');

describe('TDD Kata - Tres en Raya', () => {
    let game;

    beforeEach(() => {
        game = new TicTacToe();
    });

    // Requerimiento 1: Colocación de piezas
    describe('Requerimiento 1: Colocación de piezas', () => {
        test('Debe lanzar excepción cuando una pieza está fuera del eje X (menor a 0 o mayor a 2)', () => {
            expect(() => game.play(3, 1)).toThrow('Fuera del eje X');
            expect(() => game.play(-1, 1)).toThrow('Fuera del eje X');
        });

        test('Debe lanzar excepción cuando una pieza está fuera del eje Y (menor a 0 o mayor a 2)', () => {
            expect(() => game.play(1, 3)).toThrow('Fuera del eje Y');
            expect(() => game.play(1, -1)).toThrow('Fuera del eje Y');
        });

        test('Debe lanzar excepción cuando una pieza se coloca en un lugar ya ocupado', () => {
            game.play(1, 1); // Turno de X
            expect(() => game.play(1, 1)).toThrow('Lugar ya ocupado');
        });
    });

    // Requerimiento 2: Turnos
    describe('Requerimiento 2: Gestión de turnos', () => {
        test('El primer turno siempre debe ser jugado por "X"', () => {
            expect(game.getCurrentPlayer()).toBe('X');
        });

        test('Si el último turno fue "X", el siguiente debe ser "+"', () => {
            game.play(0, 0); // Juega X
            expect(game.getCurrentPlayer()).toBe('+');
        });

        test('Si el último turno fue "+", el siguiente debe ser "X"', () => {
            game.play(0, 0); // Juega X
            game.play(1, 0); // Juega +
            expect(game.getCurrentPlayer()).toBe('X');
        });
    });

    // Requerimiento 3: Condiciones de victoria
    describe('Requerimiento 3: Condiciones de victoria', () => {
        test('Si no se cumple la condición de victoria, no hay ganador', () => {
            game.play(0, 0);
            expect(game.getWinner()).toBeNull();
        });

        test('Un jugador gana cuando toda una línea horizontal es ocupada por sus piezas', () => {
            game.play(0, 0); // X
            game.play(1, 0); // +
            game.play(0, 1); // X
            game.play(1, 1); // +
            game.play(0, 2); // X gana en la fila 0
            expect(game.getWinner()).toBe('X');
        });

        test('Un jugador gana cuando toda una línea vertical es ocupada por sus piezas', () => {
            game.play(0, 0); // X
            game.play(0, 1); // +
            game.play(1, 0); // X
            game.play(1, 1); // +
            game.play(2, 0); // X gana en la columna 0
            expect(game.getWinner()).toBe('X');
        });

        test('Un jugador gana cuando toda una línea diagonal es ocupada por sus piezas', () => {
            game.play(0, 0); // X
            game.play(0, 1); // +
            game.play(1, 1); // X
            game.play(1, 0); // +
            game.play(2, 2); // X gana en la diagonal principal
            expect(game.getWinner()).toBe('X');
        });
    });
});