import { DIRECTION, GAME_STATUS, SETTINGS } from "./constants.js"

const _state = {
  settings: {
    gridSize: {
      rows: Math.min(...SETTINGS.gridSize),
      columns: Math.min(...SETTINGS.gridSize)
    },
    pointsToWin: Math.min(...SETTINGS.pointsToWin),
    pointsToLose: Math.min(...SETTINGS.pointsToLose),
    isOnSound: SETTINGS.isOnSound
  },
  score: {
    gogle: 0,
    player1: 0,
    player2: 0,
  },
  gameStatus: GAME_STATUS.game,
  coords: {
    google: {
      current: {
        x: 0,
        y: 0
      },
    },
    players: {
      "1": {
        x: 2,
        y: 3
      },
      "2": {
        x: 3,
        y: 3
      }
    }
  },
  subscribers: [],
  intervalId: null
}

console.log(_state)
export function getGridSize() {
  return _state.settings.gridSize
}

export function getCoordsGoogle() {
  return _state.coords.google
}

export function getCoordsPlayers() {
  return _state.coords.players
}

export function getGameStatus() {
  return _state.gameStatus
}

export function getSettings() {
  return _state.settings
}

export function getScore() {
  return _state.score
}

// 
export function setCoordsPlayer(id, direction) {

  if (id === '1') {
    switch (direction) {
      case DIRECTION.UP: 
      _state.coords.players["1"].y--
      break
      case DIRECTION.DOWN: 
      _state.coords.players["1"].y++
      break
      case DIRECTION.LEFT: 
      _state.coords.players["1"].x--
      break
      case DIRECTION.RIGHT: 
      _state.coords.players["1"].x++
      break
    }
  }
  if (id === '2') {
    switch (direction) {
      case DIRECTION.UP: 
      _state.coords.players["2"].y--
      break
      case DIRECTION.DOWN: 
      _state.coords.players["2"].y++
      break
      case DIRECTION.LEFT: 
      _state.coords.players["2"].x--
      break
      case DIRECTION.RIGHT: 
      _state.coords.players["2"].x++
      break
    }
  }

}

// 
function _notify() {
  _state.subscribers.forEach(subscriber => subscriber())
}

export function subscribe(subscriber) {
  _state.subscribers.push(subscriber)
}

function _moveGoogleToRandomPosition() {
  let newX = null
  let newY = null

  const { x, y } = _state.coords.google.current
  const { columns, rows } = _state.settings.gridSize
  const players = Object.entries(_state.coords.players)

  do {
    newX = _getRandom(columns - 1)
    newY = _getRandom(rows - 1)
  } while (players.some(player => player[0].x === newX && player[0].y && player[1].x === newX && player[1].y)
  && newX === x && newY === y)

  _state.coords.google.current = { x: newX, y: newY }
}

function _getRandom(n) {
  return Math.floor(Math.random() * (n + 1))
}

export function _runStepInterval() {
  _state.intervalId = setInterval(() => {
    _moveGoogleToRandomPosition()
    _notify()
  }, 1100)
}

if (_state.gameStatus === GAME_STATUS.game) {
  _runStepInterval()
}

export function start() {
  _state.gameStatus = GAME_STATUS.game
  _runStepInterval()
  _notify()
}

export function stop() {
  _state.gameStatus = GAME_STATUS.beginning

  clearInterval(_state.intervalId)

  _state.score = { catch: 0, miss: 0 }
  _state.coords.google.current = { x: 0, y: 0 }
  _state.coords.google.previous = { x: 0, y: 0 }
  _notify()
}
