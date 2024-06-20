import { getGridSize } from "../src/data/state.js"
import { Cell } from "./Cell.js"



export function Grid() {
  const gridSizeElement = document.createElement("table")
  const gridSize = getGridSize()
  
  for (let y = 0; y < gridSize.y; y++) {
    const rowsElement = document.createElement("tr")
    
    for (let x = 0; x < gridSize.x; x++) {
      const cellElement = Cell(x, y)  

      rowsElement.append(cellElement)
    }
    gridSizeElement.append(rowsElement)
  }


  return gridSizeElement
}