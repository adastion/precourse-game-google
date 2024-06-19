const _state = {
  catch: 2,
  miss: 3,
  grid: {
    x: 4,
    y: 4,
  },
  coords: {
    google: {
      x: 0,
      y: 0
    },
    catch: {
      x: 0,
      y: 0
    },
    miss: {
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

export const getPoints = () => {
  return {
    catch: _state.catch,
    miss: _state.miss
  }
}

export function getGridSize() {
  return _state.grid
}


setInterval(() => {
  _state.catch++

  _notify()
}, 1000)