import { DIRECTIONS } from "../../../data/constants.js"
import { _movePlayerPosition } from "../../../data/state.js"

export function Player(playerId) {
  const playerElement = document.createElement("div")
  window.addEventListener("keyup", (e) => {
    if (playerId[0] === '1') {
      switch (e.key) {
        case "ArrowUp":
          _movePlayerPosition("1", DIRECTIONS.UP)
          break
        case "ArrowRight":
          _movePlayerPosition("1", DIRECTIONS.RIGHT)
          break
        case "ArrowDown":
          _movePlayerPosition("1", DIRECTIONS.DOWN)
          break
        case "ArrowLeft":
          _movePlayerPosition("1", DIRECTIONS.LEFT)
          break
      }
    }

    if (playerId[0] === '2') {
      switch (e.key) {
        case "w":
          _movePlayerPosition("2", DIRECTIONS.UP)
          break
        case "d":
          _movePlayerPosition("2", DIRECTIONS.RIGHT)
          break
        case "s":
          _movePlayerPosition("2", DIRECTIONS.DOWN)
          break
        case "a":
          _movePlayerPosition("2", DIRECTIONS.LEFT)
          break
      }
    }
  })

  playerElement.textContent = playerId[0]

  return playerElement
}