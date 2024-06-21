export function Button(method, content) {
  const btnElement = document.createElement("button")
  btnElement.style = "cursor: pointer; font-size: 24px; padding: 6px 12px; border-radius: 10px"
  btnElement.textContent = content

  btnElement.addEventListener("click", (e) => {
    e.preventDefault()
    method()
  })

  return btnElement
}