function createBoard (size) {
  const board = []
  createColumns(board, size)
  return board
}

function createColumns(board, size){
  for (let i = 0; i < size; i++){
    board[i] = []
    createRows(board[i], size)
  }
}

function createRows(column, size){
  for (let y = 0; y < size; y++){
    column.push([])
  }
  return column
}

module.exports = createBoard
