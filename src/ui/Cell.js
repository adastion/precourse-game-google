import { getCoordsGoogle, setCatchGoogle, subscribe } from "../data/state.js";

export function Cell(x, y) {
  subscribe(() => {
    _update(x, y, cell)
  })

  const cell = document.createElement("td")
  cell.style = "text-align: center; width: 50px; height: 50px; border: 2px solid gray; border-radius: 20%; cursor: pointer"

  _update(x, y, cell)

  cell.addEventListener("click", () => {

    if (cell.textContent === "G🍇") {
      setCatchGoogle()
    }
  })
  return cell
}

function _update(x, y, cell) {
  const coordsGogle = getCoordsGoogle()
  cell.innerHTML = ""

  if (x === coordsGogle.current.x
    && y === coordsGogle.current.y
  ) {
    cell.textContent = "G🍇"
  }
}