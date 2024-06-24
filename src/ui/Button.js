export function Button(method, name) {
  const buttonElement = document.createElement("button")
  buttonElement.textContent = name
  buttonElement.addEventListener("click", ()=> {
    method()
  })

  return buttonElement
}