import { subscribe } from "../data/state.js"

export function Cell(x, y) {
  const cellElement = document.createElement("td")
  cellElement.style = "text-align: center; width: 60px; height: 60px; border: 2px solid blue; border-radius: 10px; gap: 10px "

  subscribe(()=> {
    _update(x, y, cellElement)
  })
  _update(x, y, cellElement)

  cellElement.textContent = "G🥕"
  return cellElement
}

function _update(x, y, parentElement) {

  
}