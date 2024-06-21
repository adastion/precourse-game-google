import { startingGameplay, stopingGameplay } from "./src/data/state.js";
import { Button } from "./src/ui/Button.js";
import { Grid } from "./src/ui/Grid.js";
import { StatusGame } from './src/ui/StatusGame.js';


const rootElement = document.getElementById("root")

function App() {
  rootElement.style = "display: grid; justify-content: center"
  rootElement.innerHTML = ""
  const status = StatusGame()

  const tabelGame = Grid()

  const buttonBeginningGame = Button(startingGameplay, "start game")
  const buttonStopingGame = Button(stopingGameplay, "stop game")

  rootElement.append(status, tabelGame, buttonBeginningGame, buttonStopingGame)
}

App()