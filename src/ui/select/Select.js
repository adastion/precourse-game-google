import { SETTINGS } from "../../data/constants.js"

export function Select(key) {
  const selectElement = document.createElement("select")

  const valuesArray = SETTINGS[key]

  if (typeof valuesArray === "object") {
    valuesArray.forEach(value => {
      const optionElement = document.createElement("option")

      if (key === "gridSize") {
        optionElement.textContent = `${value} x ${value}`
      } else {
        optionElement.textContent = `${value} pts`
      }

      selectElement.append(optionElement)
    })


  }

  return selectElement
}