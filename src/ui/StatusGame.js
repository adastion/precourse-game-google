export function StatusGame(points) {
  const statusElement = document.createElement("div")
  const catchElement = document.createElement("span")
  catchElement.textContent = `catch: ${points.catch} ---- `
  const missElement = document.createElement("span")
  missElement.textContent = `miss: ${points.miss}`

  statusElement.style = "font-size: 25px; font-weight: bold;"
  statusElement.append(catchElement, missElement)

  return statusElement
} 