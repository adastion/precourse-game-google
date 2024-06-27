import { getCoordsGoogle, getGridSize } from "../data/state.js";

const rootElement = document.getElementById("root")

export function App() {
  const appElement = document.createElement("div")
  appElement.textContent = "Test Hi)"

  const gridElement = document.createElement("table")
  gridElement.style = "border: collapse"
  const { rows, columns } = getGridSize()

  for (let y = 0; y < rows; y++) {
    const rowElement = document.createElement("tr")

    for (let x = 0; x < columns; x++) {
      const cellElement = document.createElement("td")
      cellElement.style = "text-align: center; border: 2px solid green; width: 60px; height: 60px; border-radius: 10px"

      const coordsGoogle = getCoordsGoogle()
      if (x === coordsGoogle.current.x && y === coordsGoogle.current.y) {
        cellElement.textContent = "G🍏"
      }

      rowElement.append(cellElement)
    }
    gridElement.append(rowElement)
  }

  appElement.append(gridElement)
  return rootElement.append(appElement)
}