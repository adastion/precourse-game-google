import { getGridSize } from "../data/state.js"
import { Cell } from "./Cell.js"

export function Gameplay() {
  const gridElement = document.createElement("table")
  const { columns, rows } = getGridSize()

  for (let y = 0; y < rows; y++) {
    const rowsElement = document.createElement("tr")

    for (let x = 0; x < columns; x++) {
      const cell = Cell(columns, rows)


      rowsElement.append(cell)
    }

    gridElement.append(rowsElement)
  }

  return gridElement
}