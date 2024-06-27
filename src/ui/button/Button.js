export function Button(handler, name) {
  const buttonElement = document.createElement("button")
  buttonElement.style = "font-size: 26px; display: flex; flex-derection: column; padding: 6px 12px; cursor: pointer; border-radius: 6px; border: none"
  buttonElement.textContent = name
  buttonElement.addEventListener("click", (e) => {
    e.preventDefault()
    handler()
  })
  return buttonElement
}