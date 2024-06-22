import { GAME_STATE, getSatausGame, subscribe } from "./src/data/state.js";
import { Beginning } from "./src/ui/Beginning.js";
import { Grid } from './src/ui/Grid.js';
import { Miss } from './src/ui/Miss.js';
import { StatusGame } from './src/ui/StatusGame.js';
import { Win } from './src/ui/Win.js';

(function App() {
  const rootElement = document.getElementById("root")
  rootElement.style = "display: grid; justify-content: center"
  
  subscribe(() => {
    rootElement.innerHTML = ""
    _updateApp(rootElement)
  })
  _updateApp(rootElement)
})()

function _updateApp(parentElement) {
  const gameState = GAME_STATE
  const gameStatus = getSatausGame()

  if (gameStatus === gameState.beginning) {
    const begginningGame = Beginning()
    parentElement.append(begginningGame)
  }

  if (gameStatus === gameState.game) {
    const gameElement = StatusGame()
    const tabelGame = Grid()
    parentElement.append(gameElement, tabelGame)
  }

  if (gameStatus === gameState.finishGame.lose) {
    const loseElement = Miss()
    parentElement.append(loseElement)
  }
  
  if (gameStatus === gameState.finishGame.win) {
    const winElement = Win()
    parentElement.append(winElement)
  }
}