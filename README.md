# Snake Game

This is a simple Snake Game implemented in JavaScript. The game allows the player to control a snake and navigate it around the game area to eat food while avoiding collisions with obstacles and the snake's own body. The objective is to achieve the highest possible score before losing all lives or running out of time.

## Instructions

1. Use the arrow keys to control the snake's movement: up, down, left, and right.
2. The snake grows longer and the score increases when it eats food.
3. Colliding with obstacles or the snake's own body results in losing a life.
4. The game ends when all lives are lost or when the time runs out.
5. After game over, you can choose to restart the game.

## Functions

- `init()`: Initializes the game and starts the game loop.
- `createFood()`: Generates random coordinates for the food object.
- `createObstacle()`: Generates random coordinates for the obstacle object.
- `drawFood()`: Renders the food object on the canvas.
- `drawObstacle()`: Renders the obstacle object on the canvas.
- `drawScore()`: Displays the player's score on the canvas.
- `drawLives()`: Displays the player's remaining lives on the canvas.
- `drawTime()`: Displays the remaining time on the canvas.
- `checkCollision(obj1, obj2)`: Checks for collision between two objects.
- `checkBoundaryCollision()`: Checks if the snake has collided with the game boundaries.
- `checkSelfCollision()`: Checks if the snake has collided with itself.
- `update()`: Updates the game state, including movement, collisions, score, time, and lives.
- `render()`: Renders the game elements on the canvas.
- `gameOver()`: Handles the game over scenario.
- `keyDownHandler(event)`: Handles keyboard input for controlling the snake's movement.
- `touchStartHandler(event)`: Handles touch input for controlling the snake's movement (for mobile devices).
- `touchMoveHandler(event)`: Handles touch input for controlling the snake's movement (for mobile devices).

## How to Run

To run the game locally, follow these steps:

1. Clone or download the repository.
2. Open the `index.html` file in a web browser.
3. Start playing the Snake Game!

## Acknowledgements

This game is built using JavaScript and HTML5. It is inspired by classic snake games and serves as a fun and interactive project for learning game development concepts.

This game was developed as a task for the inductions of the coding club `Delta Force` at NIT Trichy, and I hereby present it as my submission.
