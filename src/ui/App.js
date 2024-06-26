import { GAME_STATUS } from "../data/constants.js";
import { getGameStatus, getScore, start, stop, subscribe } from "../data/state.js";
import { Beginning } from "./beginning/Beginning.js";
import { Button } from "./button/Button.js";
import { Gameplay } from "./gameplay/Gameplay.js";

const rootElement = document.getElementById("root")

export function App() {
  const appElement = document.createElement("div")
  appElement.style = "display: grid; justify-items: center"

  subscribe(() => {
    _updateApp(appElement)
  })
  _updateApp(appElement)

  return rootElement.append(appElement)
}

function _updateApp(parentElement) {
  const gameStatus = getGameStatus()
  parentElement.innerHTML = ""
  const buttonStopElement = Button(start, "paly again")

  if (gameStatus === GAME_STATUS.beginning) {
    const beginningElement = Beginning()
    parentElement.append(beginningElement,)
  }

  if (gameStatus === GAME_STATUS.game) {
    const datasetToPanel = getScore()
    
    const gamePanel = document.createElement("div")
    gamePanel.style = "display: flex; align-item: center; justify-content: center"
    gamePanel.textContent = `catch: ${datasetToPanel.catch} miss: ${datasetToPanel.miss}`

    const gridElement = Gameplay()
    parentElement.append(gamePanel, gridElement, Button(stop, "stop"))
  }

  if (gameStatus === GAME_STATUS.finish.lose) {
    // const loseElement = Lose()
    parentElement.append("Lose", buttonStopElement)
  }
  if (gameStatus === GAME_STATUS.finish.win) {
    // const winElement = Win()
    parentElement.append("Win", buttonStopElement)
  }
}