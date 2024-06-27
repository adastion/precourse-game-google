const _state = {
  settings: {},
  score: {
    miss: 0,
    catch: 0
  },
  gameStatus: "game",
  gridSize: {
    rows: 3,
    columns: 4
  },
  coords: {
    google: {
      current: {
        x: 3,
        y: 2
      },
      previous: {
        x: 0,
        y: 0
      }
    },
  },
}

export function getGridSize() {
  return _state.gridSize
}

export function getCoordsGoogle() {
  return _state.coords.google
}