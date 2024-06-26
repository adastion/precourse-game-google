import { getGridSize } from "../data/state.js"
import { Cell } from "./Cell.js"

export function Gameplay() {
  const gridElement = document.createElement("table")
  const {columns, rows} = getGridSize()

  for (let y = 0; y < rows; y++) {
    const rowsElement = document.createElement("tr")

    const cell = Cell(columns, rows, rowsElement)
    
    gridElement.append(rowsElement)
  }

  return gridElement
}