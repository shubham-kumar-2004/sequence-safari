@import url('https://fonts.googleapis.com/css2?family=Unbounded&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Unbounded', sans-serif;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #131736fb;
}

.title-box {
  display: flex;
  color: #00ff26;
  font-family: 'Unbounded', sans-serif;
  letter-spacing: 2px;
  line-height: 100px;
  height: 100px;
  text-align: center;
}

.navbar {
  width: 74vmin;
  height: 80vmin;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  background: #203253;
  box-shadow: 0 20px 40px rgba(52, 87, 220, 0.2);
}

.title-box {
  color: #00ff26;
  font-weight: 500;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-details {
  color: #00ff26;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
}

.game-details .timer {
  color: #00ff26; /* Color for the timer */
}

.gameboard {
  height: 100%;
  width: 100%;
  display: grid;
  background: #1c2840;
  grid-template: repeat(30, 1fr) / repeat(30, 1fr);
}

.food {
  background: #ff00dd;
}

.head {
  background: #00ff55;
}

.game-over-splash {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
}

.game-over-splash h2 {
  margin-bottom: 10px;
}

.game-over-splash p {
  margin: 0;
}

.start-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mode-button {
  font-size: 18px;
  background: #20283C;
  width: 230px;
  padding: 23px;
  text-align: center;
  color: #00ff26;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition-duration: 0.3s;
  transition-property: box-shadow, transform;
  margin-bottom: 10px;
  border: none;
  outline: none;
  display: block; /* Change display property to block */
}

.mode-button:hover, .mode-button:focus, .mode-button:active {
  transform: scale(1.1);
  box-shadow: 0px 0px 40px #75FB55;
}


.start-screen h1 {
  font-size: 42px;
  color: #00ff26;
  margin-bottom: 50px;
  margin-top: 00px;
  text-shadow: 0px 0px 25px rgba(117, 251, 85, 0.67);
}

.start-screen h3 {
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 0px 0px 25px rgba(117, 251, 85, 0.67);
}

.obstacle {
  background: #ff0000;
}
