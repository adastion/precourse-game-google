const _state = {
  catch: 0,
  miss: 0,
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
        _notify()
      }, 800)
}

export function startingGameplay() {
  _intervalId = _startSetInterval()
}

export function stopingGameplay() {
  if(_intervalId !== null) {
    clearInterval(_intervalId)
    _intervalId = null
  }
}

// getters
export const getPoints = () => {
  return {
    catch: _state.catch,
    miss: _state.miss
  }
}

export function getGridSize() {
  return _state.grid
}

export function getCoordsGoogle() {
  return _state.coords.google
}

