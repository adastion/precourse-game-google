import { GAME_STATUS, SETTINGS } from "./constants.js"

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
    miss: 0,
    catch: 0
  },
  gameStatus: GAME_STATUS.beginning,
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
  },
}

console.log(_state)
export function getGridSize() {
  return _state.settings.gridSize
}

export function getCoordsGoogle() {
  return _state.coords.google
}

export function getGameStatus() {
  return _state.gameStatus
}

export function getSettings() {
  return _state.settings
}

export function getScoreCatch() {
  return _state.score
}

let _subscribers = []

function _notify() {
  _subscribers.forEach(subscriber => subscriber())
}

export function subscribe(subscriber) {
  _subscribers.push(subscriber)
}

function _moveGoogleToRandomPosition() {
  let newX = null
  let newY = null

  do {
    newX = _getRandom(_state.settings.gridSize.columns - 1)
    newY = _getRandom(_state.settings.gridSize.rows - 1)
  } while (newX === _state.coords.google.current.x && newY === _state.coords.google.current.y)

  _state.coords.google.current = { x: newX, y: newY }

  setTimeout(() => {
    _state.coords.google.previous = { x: newX, y: newY }
  }, 900)
}

function _getRandom(n) {
  return Math.floor(Math.random() * (n + 1))
}

let _intervalId = null

export function _runStepInterval() {
  _intervalId = setInterval(() => {
    _moveGoogleToRandomPosition()
    _notify()
  }, 1100)
}

export function start() {
  _state.gameStatus = GAME_STATUS.game
  _runStepInterval()
  _notify()
}

export function stop() {
  _state.gameStatus = GAME_STATUS.beginning
  clearInterval(_intervalId)
  _state.score = { catch: 0, miss: 0 }
  _state.coords.google.current = { x: 0, y: 0 }
  _state.coords.google.previous = { x: 0, y: 0 }
  _notify()
}

export function addPointToWin() {
  _state.score.catch++
  _notify()
}