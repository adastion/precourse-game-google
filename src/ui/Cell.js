export function Cell(columns, rows, parentElement) {
  for (let x = 0; x < columns; x++) {
    const cellElement = document.createElement("td")
    cellElement.style = "width: 50px; height: 50px; border: 2px solid blue; border-radius: 10px; gap: 10px "

    parentElement.append(cellElement)
  }

}