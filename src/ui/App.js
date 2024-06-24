import { getStatus, subscrube } from "../data/state.js";
import { getDataStatus } from "../data/variables.js";
import { Button } from "./Button.js";
import { Settings } from './Settings.js';
import { GameStatusPanel } from './Game-panel.js';
import { Win } from './Win.js';
import { Lose } from './Lose.js';
import { Gameplay } from './Gameplay.js';

export function App() {
  const appElement = document.getElementById("root")

  subscrube(() => {
    _updateApp(appElement)
  })
  _updateApp(appElement)

}

function _updateApp(rootElement) {
  rootElement.innerHtml = ""

  const gameState = getStatus()

  if (gameState === getDataStatus().begininng) {
    const settingsElement = Settings()
    const buttonElement = Button(() => { }, "start game")
    rootElement.append(settingsElement, buttonElement)
  }

  if (gameState === getDataStatus().game) {
    const gamePanelElement = GameStatusPanel()
    const gridElement = Gameplay()

    rootElement.append(gamePanelElement, gridElement)
  }

  if (gameState === getDataStatus().finish.win) {
    const winElement = Win()
    rootElement.append(winElement)
  }

  if (gameState === getDataStatus().finish.lose) {
    const loseElement = Lose()
    rootElement.append(loseElement)
  }
}