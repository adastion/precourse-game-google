import { start } from "../../data/state.js"
import { Button } from "../button/Button.js"
import { Settings } from "../settings/Settings.js"

export function Beginning() {
  const beginningElement = document.createElement("div")
  beginningElement.style = "display: grid"
  
  const settingsElement = Settings()
  const buttonElement = Button(start, "start game")

  beginningElement.append(settingsElement, buttonElement)
  return beginningElement
}