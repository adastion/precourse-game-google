import { GAME_STATUS } from "../data/constants.js";
import { getStatus, subscribe } from "../data/state.js";
import { Button } from "./Button.js";
import { Finish } from './Finish.js';
import { GameStatusPanel } from './Game-panel.js';
import { Gameplay } from './Gameplay.js';
import { Settings } from './Settings.js';

export function App() {
  const appElement = document.getElementById("root")

  subscribe(() => {
    _updateApp(appElement)
  })
  _updateApp(appElement)

}

function _updateApp(rootElement) {
  rootElement.innerHtml = ""
  const gameState = getStatus()

  if (gameState === GAME_STATUS.begininng) {
    const settingsElement = Settings()
    const buttonElement = Button(() => { }, "start game")
    rootElement.append(settingsElement, buttonElement)
  }

  if (gameState === GAME_STATUS.game) {
    const gamePanelElement = GameStatusPanel()
    const gridElement = Gameplay()

    rootElement.append(gamePanelElement, gridElement)
  }

  if (gameState === GAME_STATUS.finish.win) {
    const FinishElement = Finish(GAME_STATUS.finish.win)
    rootElement.append(FinishElement)
  }

  if (gameState === GAME_STATUS.finish.lose) {
    const FinishElement = Finish(GAME_STATUS.finish.lose)
    rootElement.append(FinishElement)
  }
}