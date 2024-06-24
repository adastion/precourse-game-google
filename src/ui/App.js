import { Button } from "./Button.js"
import { GameStatusPanel } from './Game-panel.js';
import { Gameplay } from './Gameplay.js';
import { Settings } from "./Settings.js";
import { Win } from "./Win.js";
import { Select } from './Select.js';
import { Cell } from './Cell.js';
import { Lose } from './Lose.js';

export function App () {
  const appElement = document.getElementById("root")
  appElement.textContent = "Hi!!!!"

  
  appElement.append(Button(), Cell(), GameStatusPanel(), Gameplay(), Lose(),Select(),Settings(), Win() )
  return appElement
}
