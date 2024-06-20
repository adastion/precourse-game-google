import { startingGameplay, stopingGameplay } from "./src/data/state.js";
import { Grid } from "./ui/Grid.js";
import { getPoints, subscribe } from "/data/state.js"
import { StatusGame } from '/ui/StatusGame.js';


const rootElement = document.getElementById("root")

function App() {
  rootElement.style = "display: grid; justify-content: center"
  rootElement.innerHTML = ""
  const dataStatus = getPoints()

  const status = StatusGame(dataStatus)
  
  const tabelGame = Grid(3, 2)

  const buttonBeginningGame = document.createElement("button")
  buttonBeginningGame.style = "cursor: pointer; font-size: 24px; padding: 6px 12px; border-radius: 10px"
  buttonBeginningGame.textContent = "start game"
  buttonBeginningGame.addEventListener("click", (e)=> {
    e.preventDefault()
    startingGameplay()
  })
  
  const buttonStopingGame = document.createElement("button")
  buttonStopingGame.style = "cursor: pointer; font-size: 24px; padding: 6px 12px; border-radius: 10px"
  buttonStopingGame.textContent = "stop game"
  buttonStopingGame.addEventListener("click", (e)=> {
    e.preventDefault()
    stopingGameplay()
  })
  
  rootElement.append(status, tabelGame, buttonBeginningGame, buttonStopingGame)
}

App()
subscribe(App)