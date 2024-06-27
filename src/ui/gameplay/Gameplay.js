import { getGridSize } from "../../data/state.js"
import { Cell } from "./cell/Cell.js"

export function Gameplay() {
  const gridElement = document.createElement("table")
  gridElement.style = "border: collapse"
  const { rows, columns } = getGridSize()

  for (let y = 0; y < rows; y++) {
    const rowElement = document.createElement("tr")

    for (let x = 0; x < columns; x++) {
      const cellElement = Cell(x, y)
      rowElement.append(cellElement)
    }
    gridElement.append(rowElement)
  }

  return gridElement
}