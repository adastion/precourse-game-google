import { Gameplay } from "./gameplay/Gameplay.js";

const rootElement = document.getElementById("root")

export function App() {
  rootElement.innerHTML = ""
  const appElement = document.createElement("div")
  appElement.textContent = "Test Hi)"
  
  const gridElement = Gameplay()

  appElement.append(gridElement)
  return rootElement.append(appElement)
}