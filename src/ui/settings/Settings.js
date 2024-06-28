import { getSettings } from "../../data/state.js"
import { Select } from "../select/Select.js"

export function Settings() {
  const settingsElement = document.createElement("ul")
  settingsElement.style = "display: grid; gap: 15px"

  const settingsData = Object.entries(getSettings())

  settingsData.forEach(arrData => {
    if (typeof arrData[1] !== "boolean") {
      const itemElement = document.createElement("li")
      const titleElement = document.createElement("h3")
      titleElement.textContent = arrData[0]

      itemElement.append(titleElement, Select(arrData[0]))
      settingsElement.append(itemElement)

    } else {
      const itemElement = document.createElement("li")
      const labelElement = document.createElement("label")
      labelElement.textContent = "sound On"

      const checkboxElement = document.createElement("input")
      checkboxElement.type = "checkbox"
      itemElement.append(checkboxElement, labelElement)
      settingsElement.append(itemElement)
    }
  })


  return settingsElement
}
