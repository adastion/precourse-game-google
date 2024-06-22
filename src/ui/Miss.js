import { resetGame } from "../data/state.js"
import { Button } from "./Button.js"

export function Miss() {
  const messageElement = document.createElement("div")
  const title = document.createElement("h2")
  title.textContent = "You lose ("
  const btnResetGame = Button(resetGame, "play again")

  messageElement.append(title, btnResetGame)
  return messageElement
}