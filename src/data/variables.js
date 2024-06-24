export function getDataStatus() {
  return _GAME_STATUS
}
export function getDataSettings() {
  return _SETTINGS_DATA
}


const _GAME_STATUS = {
  begininng: "beginning",
  game: "game",
  finish: {
    win: "win",
    lose: "lose"
  }
}

const _SETTINGS_DATA = {
  gridSize: [3, 4, 5, 6, 7, 8],
  maxPointsToWin: [5, 10, 20, 30, 40],
  maxPointsToLose: [5, 10, 15, 20, 25],
  isSoundOn: false
}