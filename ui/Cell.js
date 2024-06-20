import { getCoordsGoogle, subscribe } from "../data/state.js";

export function Cell(x, y) {
  subscribe(() => {
    _update(x, y, cell)
  })

  const cell = document.createElement("td")
  cell.style = "text-align: center; width: 50px; height: 50px; border: 2px solid gray; border-radius: 20%"

  _update(x, y, cell)

  return cell
}

function _update(x, y, cell) {
  const coordsGogle = getCoordsGoogle()
  cell.innerHtml = ""

  if (x === coordsGogle.current.x 
      && y === coordsGogle.current.y
  ) {
    cell.textContent = "G🍇"
  }
}