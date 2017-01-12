var TETRIS = TETRIS || {};

TETRIS.Model = (function(PieceModule) {

  var width, height;
  var currentPiece;
  var board = [];

  // Getter for width
  var getWidth = function() {
    return width;
  }

  // Getter for height
  var getHeight = function() {
    return height;
  }

  // Getter for currentPiece
  var getCurrentPiece = function() {
    return currentPiece;
  }

  // Generate an empty 2D board array.
  // Each array represents a row on the board.
  // Each element in a row subarray is set to 'false' initially
  //   to indicate that the cell is not occupied by a block.
  var generateBoard = function() {
    for (var row = 0; row < height; row++) {
      board.push([]);
      for (var col = 0; col < width; col++) {
        board[board.length-1].push(false);
      }
    }
  }

  // Generates a new piece and sets it as currentPiece
  var generatePiece = function() {
    currentPiece = new PieceModule.Piece(
      // get a random shape (as a letter)
      PieceModule.getRandomShape(),
      // random x coordinate between 1 and width - 1
      2 + Math.floor(Math.random() * (width -1)),
      // currentPiece always starts at y = 0
      0
    );
  }

  // Store piece in board, setting the proper value in boards
  //   equal to 'true'.
  var storePiece = function() {
    currentPiece.coords.forEach(function(coords) {
      board[coords.y][coords.x] = true;
    })
  }

  var init = function(w, h) {
    width = w;
    height = h;
    generateBoard();
  }

  return {
    init: init,
    getWidth: getWidth,
    getHeight: getHeight,
    getCurrentPiece: getCurrentPiece,
    generatePiece: generatePiece
  }

})(TETRIS.PieceModule);
