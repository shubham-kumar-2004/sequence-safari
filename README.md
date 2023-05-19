# Sequence Safari


The Snake Game is a simple implementation of the classic snake game. The game board is a 30x30 grid, and the snake starts at the position (5, 15). The objective is to control the snake and eat pieces of food to grow in length. The game ends if the snake hits a wall or its own body.

## Functions

The code is divided into several functions:

* `updateFoodPosition()`: This function randomly generates a new position for the food.
* `handleGameOver()`: This function is called when the game is over. It displays an alert message and then reloads the page.
* `changeDirection()`: This function is called when the user presses an arrow key. It changes the direction of the snake.
* `initGame()`: This function is called repeatedly to update the game state. It checks if the snake has eaten a piece of food, and if so, it grows the snake and generates a new piece of food. It also checks if the snake has hit a wall or its own body, and if so, it calls the `handleGameOver()` function.

## Variables

The code uses the following variables:

* `gameOver`: This variable is set to `true` when the game is over.
* `foodX` and `foodY`: These variables store the position of the food.
* `snakeX` and `snakeY`: These variables store the position of the snake's head.
* `speedX` and `speedY`: These variables store the snake's direction of movement.
* `snakeBody`: This array stores the positions of the snake's body.
* `setIntervalId`: This variable stores the ID of the interval that is used to repeatedly update the game state.
* `score`: This variable stores the player's score.
* `highScore`: This variable stores the player's high score.
