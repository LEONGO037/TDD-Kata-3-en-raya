# TDD Kata: Tres en Raya

Este proyecto contiene la resolución de la Kata de TDD para el juego de Tres en Raya (Tic-Tac-Toe), desarrollada como parte de la asignatura de Gestión de Calidad. La implementación sigue estrictamente los requerimientos de colocación de piezas, gestión de turnos y condiciones de victoria.

## 🚀 Requisitos Previos

Antes de iniciar, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (Versión 14 o superior recomendada)
- npm (incluido con Node.js)

## 🛠️ Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/LEONGO037/TDD-Kata-3-en-raya.git
   ```
2. Navega a la carpeta del proyecto:
   ```bash
   cd TDD-Kata-3-en-raya
   ```
3. Instala las dependencias necesarias (Jest):
   ```bash
   npm install
   ```

## 🧪 Ejecución de Pruebas Unitarias

El proyecto incluye dos juegos de pruebas para la comparación requerida en la tarea.

### Ejecutar todas las pruebas
Para correr todas las suites de pruebas (Manual e IA) al mismo tiempo:
```bash
npm test
```

### Ejecutar solo las pruebas manuales (TDD)
Para verificar la lógica desarrollada mediante TDD:
```bash
npm test -- TicTacToe.test.js
```

### Ejecutar solo las pruebas generadas por IA
Para verificar la suite de pruebas generada por la Inteligencia Artificial:
```bash
npm test -- TicTacToeIA.test.js
```

## 🎮 Modo Demo (Interactivo)

Si deseas probar el juego de forma interactiva en la consola, puedes ejecutar el script de demostración:

```bash
node demo.js
```
Este modo te permite ingresar coordenadas (fila,columna) para jugar una partida completa contra otro jugador local.

## 📁 Estructura del Proyecto

- `TicTacToe.js`: Lógica principal del juego (Clase TicTacToe).
- `demo.js`: Script interactivo para jugar en consola.
- `TicTacToe.test.js`: Pruebas unitarias creadas manualmente siguiendo el ciclo TDD.
- `TicTacToeIA.test.js`: Pruebas unitarias generadas mediante prompts de IA.
- `package.json`: Configuración del proyecto y dependencias.

## 📝 Requerimientos Implementados

1. **Colocación de piezas:** Validación de límites del tablero (3x3) y control de espacios ocupados.
2. **Gestión de turnos:** Alternancia entre los jugadores 'X' y '+', comenzando siempre por 'X'.
3. **Condiciones de victoria:** Verificación de líneas horizontales, verticales y diagonales.