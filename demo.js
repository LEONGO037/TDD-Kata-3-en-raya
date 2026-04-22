const TicTacToe = require('./TicTacToe');
const readline = require('readline');

// Configuramos la interfaz para leer lo que el usuario escribe en la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const game = new TicTacToe();
let turnosJugados = 0; // Llevamos la cuenta para detectar si hay empate

// Función para mostrar el tablero de forma amigable
function imprimirTablero() {
    console.log("\nTablero actual:");
    game.board.forEach((fila, index) => {
        const filaVisual = fila.map(celda => celda === null ? ' ' : celda);
        console.log(` ${filaVisual.join(' | ')} `);
        if (index < 2) console.log("-----------"); // Separador de filas
    });
    console.log("");
}

// Función recursiva que controla el flujo del juego
function preguntarJugada() {
    // 1. Verificamos si alguien ya ganó
    if (game.getWinner()) {
        imprimirTablero();
        console.log(`🎉 ¡Felicidades! El jugador '${game.getWinner()}' ha ganado el juego. 🎉\n`);
        rl.close(); // Cerramos el programa
        return;
    }

    // 2. Verificamos si hay empate (tablero lleno tras 9 turnos)
    if (turnosJugados === 9) {
        imprimirTablero();
        console.log("🤝 ¡Es un empate! El tablero está lleno.\n");
        rl.close();
        return;
    }

    // 3. Mostramos el tablero y pedimos la jugada
    imprimirTablero();
    rl.question(`Turno de '${game.getCurrentPlayer()}'. Ingresa tu jugada (fila,columna) -> ej: 0,2: `, (respuesta) => {
        try {
            // Extraemos los números que el usuario escribió separados por coma
            const partes = respuesta.split(',');
            if (partes.length !== 2) throw new Error("Formato incorrecto. Usa el formato fila,columna (ejemplo: 1,1)");

            const x = parseInt(partes[0].trim());
            const y = parseInt(partes[1].trim());

            if (isNaN(x) || isNaN(y)) throw new Error("Debes ingresar números enteros");

            // Intentamos registrar la jugada usando la clase que creamos con TDD
            game.play(x, y);
            turnosJugados++; // Si no hubo error, sumamos un turno

            // Llamamos a la función de nuevo para el siguiente turno
            preguntarJugada();

        } catch (error) {
            // Si el usuario pone una posición ocupada o fuera del tablero, nuestro programa lanza un error
            console.log(`\n❌ Error: ${error.message}. Por favor, intenta de nuevo.`);
            // Volvemos a preguntar sin cambiar de turno
            preguntarJugada();
        }
    });
}

// --- Inicio del juego ---
console.log("🎮 ¡Bienvenido a Tres en Raya!");
console.log("Instrucciones: Las coordenadas van del 0 al 2.");
console.log(" - Filas: 0 (arriba), 1 (medio), 2 (abajo)");
console.log(" - Columnas: 0 (izquierda), 1 (medio), 2 (derecha)");
console.log("Ejemplo: Para jugar en el centro exacto, escribe 1,1");

preguntarJugada();