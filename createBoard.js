function createBoard (size) {
  const board = []
  for (let i = 0; i < size; i++){
    board[i] = []
    for (let y = 0; y < size; y++){
      board[i].push([])
    }
  }
  return board
}

module.exports = createBoard
