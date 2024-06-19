import { Grid } from "./ui/Grid.js";
import { getPoints, subscribe } from "/data/state.js"
import { StatusGame } from '/ui/StatusGame.js';


const rootElement = document.getElementById("root")

function App() {
  rootElement.innerHTML = ""

  const dataStatus = getPoints()
  const status = StatusGame(dataStatus)
  const tabelGame = Grid(3, 2)

  rootElement.append(status, tabelGame)
}

App()
subscribe(App)