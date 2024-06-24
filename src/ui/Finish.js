import { Button } from "./Button.js"

export function Finish(gameState) {
  const containerElement = document.createElement("div")
  containerElement.textContent = gameState

  containerElement.append(Button(()=> {}, "play again"))
  return containerElement
}