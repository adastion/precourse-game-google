  import { getCoordsGoogle, getCoordsPlayers, subscribe } from "../../../data/state.js";

  export function Cell(x, y) {
    const cellElement = document.createElement("td")
    cellElement.style = "text-align: center; border: 2px solid green; width: 60px; height: 60px; border-radius: 10px"

    subscribe(() => {
      _updateCell(x, y, cellElement)
    })

    _updateCell(x, y, cellElement)

    return cellElement
  }

  function _updateCell(x, y, parentElement) {
    const coordsGoogle = getCoordsGoogle()
    const coordsPlayers = Object.entries(getCoordsPlayers())

    if (x === coordsGoogle.current.x && y === coordsGoogle.current.y) {
      parentElement.style = "cursor: pointer; text-align: center; border: 2px solid green; width: 60px; height: 60px; border-radius: 10px"
      parentElement.addEventListener("click", () => {
        parentElement.textContent = "Win!🍄"
      })
      parentElement.append("G🍏")
    }

    coordsPlayers.forEach(player => {
      const curentPlayer= player[1]

      if (x === curentPlayer.x && y === curentPlayer.y ) {
        parentElement.textContent = `игрок ${player[0]}`
      }
    })
  }