import { resetGame } from "../data/state.js"

export function Win() {
  const messageElement = document.createElement("div")
  const title = document.createElement("h2")
  title.textContent = "You win !!!"
  const btnResetGame = Button(resetGame, "play again")

  messageElement.append(title, btnResetGame)
  return messageElement
}