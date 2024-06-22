export const GAME_STATE = {
  beginning: "beginning",
  game: "game",
  finishGame: {
    win: "win",
    lose: "lose",
  },
}

const _state = {
  gameStatus: GAME_STATE.finishGame.lose,
  score: {
    catchCount: 0,
    missCount: 0,
  },
  grid: {
    x: 5,
    y: 5,
  },
  coords: {
    google: {
      current: {
        x: 0,
        y: 0
      },
      previous: {
        x: 0,
        y: 0
      }
    },
    plaeyr1: {
      x: 0,
      y: 0
    },
    plaeyr2: {
      x: 0,
      y: 0
    }
  }
}

let subscribers = []

function _notify() {
  subscribers.forEach(item => item())
}

export function subscribe(subscriber) {
  subscribers.push(subscriber)
}

function _moveGoogleToRendomPosition() {
  let newX = null
  let newY = null

  do {
    newX = _getRandom(_state.grid.x - 1)
    newY = _getRandom(_state.grid.y - 1)
  } while (_state.coords.google.current.x === newX
    && _state.coords.google.current.y === newY
  ) {
    _state.coords.google.current.x = newX
    _state.coords.google.current.y = newY
  }
}

function _getRandom(N) {
  return Math.floor(Math.random() * (N + 1))
}

//
let _intervalId = null

function _startSetInterval() {
  return setInterval(() => {
    _moveGoogleToRendomPosition()
    _setCountMissGoogle()
    _notify()
  }, 800)
}

export function startingGameplay() {
  _state.gameStatus = GAME_STATE.game
  _intervalId = _startSetInterval()
  _notify()
}

function _stopingGameplay() {
  if (_intervalId !== null) {
    clearInterval(_intervalId)
    _intervalId = null
    // _state.gameStatus = GAME_STATE.beginning
  }
}

// getters
export const getPoints = () => {
  return {
    catch: _state.score.catchCount,
    miss: _state.score.missCount
  }
}

export function getSatausGame() {
  return _state.gameStatus
}

export function getGridSize() {
  return _state.grid
}

export function getCoordsGoogle() {
  return _state.coords.google
}

// setters

export function setCatchGoogle() {
  _state.score.catchCount++
  _notify()
}

function _setCountMissGoogle() {
  _state.score.missCount++
}

export function setStatusWin() {
  _stopingGameplay()
  _state.gameStatus = GAME_STATE.finishGame.win
  _notify()
}

export function setStatusLose() {
  _stopingGameplay()
  _state.gameStatus = GAME_STATE.finishGame.lose
  _notify()
}

export function resetGame() {
  _stopingGameplay()
  _state.gameStatus = GAME_STATE.beginning
  _notify()
} 
