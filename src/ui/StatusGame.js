import { getPoints, subscribe } from "../data/state.js"

export function StatusGame() {
  subscribe(() => {
    _update(statusElement)
  })

  const statusElement = document.createElement("div")
  statusElement.style = "font-size: 25px; font-weight: bold;"

  _update(statusElement)

  return statusElement
}

function _update(element) {
  const points = getPoints()
  if (points) {
    element.innerHTML = ""

    const catchElement = document.createElement("span")
    catchElement.textContent = `catch: ${points.catch} ---- `

    const missElement = document.createElement("span")
    missElement.textContent = `miss: ${points.miss}`
    element.append(catchElement, missElement)
  }
}