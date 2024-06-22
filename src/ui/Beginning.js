import { startingGameplay } from "../data/state.js"
import { Button } from './Button.js';

export function Beginning() {
  const beginElement = document.createElement("div")
  const settings = document.createElement("div")
  settings.textContent = 'settings panel'
  const btnStart = Button(startingGameplay, "start game")
  beginElement.append(settings, btnStart)

  return beginElement
}