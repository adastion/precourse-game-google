import { getDataStatus } from "../data/constants.js";
import { getStatus, subscrube } from "../data/state.js";
import { Button } from "./Button.js";
import { Finish } from './Finish.js';
import { GameStatusPanel } from './Game-panel.js';
import { Gameplay } from './Gameplay.js';
import { Settings } from './Settings.js';

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
    const FinishElement = Finish(getDataStatus().finish.win)
    rootElement.append(FinishElement)
  }

  if (gameState === getDataStatus().finish.lose) {
    const FinishElement = Finish(getDataStatus().finish.lose)
    rootElement.append(FinishElement)
  }
}