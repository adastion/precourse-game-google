import { getSettings } from "../data/state.js"

export function GameStatusPanel() {
  const settingsData = getSettings()

  const panelElement = document.createElement("div")

  const listInfo = document.createElement("ul")

  const dataAsArray = Object.entries(settingsData)
  console.log(dataAsArray)

  dataAsArray.forEach(setting => {
    const itemElement = document.createElement("li")
    itemElement.textContent = `${setting[0]} --- ${setting[1]}`
    listInfo.append(itemElement)
  })
  
  panelElement.append(listInfo)
  return panelElement
}