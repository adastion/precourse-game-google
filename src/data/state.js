import { GAME_STATUS, SETTINGS_DATA } from "./constants.js"

const _state = {
  settings: {
    gridSize: Math.min(...SETTINGS_DATA.gridSize),
    pointsToWin: Math.min(...SETTINGS_DATA.maxPointsToWin),
    pointsToLose: Math.min(...SETTINGS_DATA.maxPointsToLose),
    isSoundOn: SETTINGS_DATA.isSoundOn
  },
  gameStatus: GAME_STATUS.game,
  gridSize: {
    columns: Math.min(...SETTINGS_DATA.gridSize),
    rows: Math.min(...SETTINGS_DATA.gridSize)
  },
  coords: {
    google: {
      current: {
        x: 0, y: 0
      },
      previous: { x: 0, y: 0 }
    },
  },
  score: {
    caughtGoogle: 0,
    missGoogle: 0
  }
}
console.log(_state.settings)

let _subscribers = []

function _notify() {
  _subscribers.forEach(subscruber => subscruber())
}

export function subscribe(subscriber) {
  _subscribers.push(subscriber)
}

//
export function getGridSize() {
  return _state.gridSize
}

export function getSettings() {
  return _state.settings
}

export function getScore() {
  return _state.score
}

export function getCoordsGoogle() {
  return _state.coords
}

export function getStatus() {
  return _state.gameStatus
}

// 