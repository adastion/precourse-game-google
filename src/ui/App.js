const rootElement = document.getElementById("root")

export function App() {
  const appElement = document.createElement("div")
  appElement.textContent = "Test Hi)"
  return rootElement.append(appElement)
}