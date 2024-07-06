import { DIRECTION } from "../data/constants.js"
import { getCoordsPlayers, setCoordsPlayer } from "../data/state.js"

export function movePlayer() {
  window.addEventListener("keyup", (e) => {
    const players = Object.keys(getCoordsPlayers())
    console.log(e.key)

    switch (e.key) {
      case "ArrowUp":
        setCoordsPlayer(players[0], DIRECTION.UP)
        break
      case "ArrowRight":
        setCoordsPlayer(players[0], DIRECTION.RIGHT)
        break
      case "ArrowDown":
        setCoordsPlayer(players[0], DIRECTION.DOWN)
        break
      case "ArrowLeft":
        setCoordsPlayer(players[0], DIRECTION.LEFT)
        break
    }
    switch (e.key) {
      case "w":
        setCoordsPlayer(players[1], DIRECTION.UP)
        break
      case "d":
        setCoordsPlayer(players[1], DIRECTION.RIGHT)
        break
      case "s":
        setCoordsPlayer(players[1], DIRECTION.DOWN)
        break
      case "a":
        setCoordsPlayer(players[1], DIRECTION.LEFT)
        break
    }
  })
}