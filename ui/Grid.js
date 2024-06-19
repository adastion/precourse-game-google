import { getGridSize } from "../data/state.js"



export function Grid() {
  const gridSizeElement = document.createElement("table")
  const gridSize = getGridSize()
  
  for (let y = 0; y < gridSize.y; y++) {
    const rowsElement = document.createElement("tr")
    
    for (let x = 0; x < gridSize.x; x++) {
      const columnsElement = document.createElement("td")
      columnsElement.style = "width: 50px; height: 50px; border: 2px solid black"
      rowsElement.append(columnsElement)


    }
    gridSizeElement.append(rowsElement)
  }


  return gridSizeElement
}