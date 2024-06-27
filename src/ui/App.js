import { GAME_STATUS } from "../data/constants.js";
import { getGameStatus, subscribe } from "../data/state.js";
import { Beginning } from "./beginning/Beginning.js";
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

  if (gameStatus === GAME_STATUS.beginning) {
    const beginningElement = Beginning()
    parentElement.append(beginningElement)
  }

  if (gameStatus === GAME_STATUS.game) {
    const gridElement = Gameplay()
    parentElement.append(gridElement)
  }

  if (gameStatus === GAME_STATUS.finish.lose) {
    // const loseElement = Lose()
    parentElement.append(Lose)
  }
  if (gameStatus === GAME_STATUS.finish.win) {
    // const winElement = Win()
    parentElement.append(Win)
  }
}