function createBoard (size) {
  const board = []
  for (let i = 0; i < size; i++){
    board[i] = []
    createRows(board[i], size)
  }
  return board
}

// function createColumns(size){

// }

function createRows(column, size){
  for (let y = 0; y < size; y++){
    column.push([])
  }
  return column
}

module.exports = createBoard
