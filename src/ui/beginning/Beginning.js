import { start } from "../../data/state.js"
import { Button } from "../button/Button.js"

export function Beginning() {
  const beginningElement = document.createElement("div")
  beginningElement.style = "display: grid"
  const settingsElement = "settings"
  const buttonElement = Button(start, "start game")

  beginningElement.append(settingsElement, buttonElement)
  return beginningElement
}