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
      // random x coordinate
      1 + Math.floor(Math.random() * (width - 3)),
      // currentPiece always starts at y = 0
      0
    );
  }

  // Determine whether a wall is in the way of a potential
  //   move.
  var wallInWay = function(direction) {
    return currentPiece.smallestX() === 0 && direction === 'L' ||
      currentPiece.largestX() === width - 1 && direction === 'R'
  }

  // Determine whether a piece can move left or right, ensuring
  //   that it does not go through the side walls.
  // Call the piece's move() if move is possible.
  var movePiece = function(direction) {
    if (wallInWay(direction)) {
      return;
    }

    var delta;

    switch (direction) {
      case 'L':
        delta = -1;
        break;
      case 'R':
        delta = 1;
        break;
      default:
        console.error("Invalid direction passed into TETRIS.Model.movePiece().")
        return;
    }

    currentPiece.coords.forEach(function(blockCoords) {
      blockCoords.x += delta;
    })
  }

  // Move a piece down with each tic
  var tic = function() {
    currentPiece.coords.forEach(function(blockCoords) {
      blockCoords.y += 1;
    })
  }

  // Store piece in board, setting the proper value in boards
  //   equal to 'true'.
  // var storePiece = function() {
  //   currentPiece.coords.forEach(function(coords) {
  //     board[coords.y][coords.x] = true;
  //   })
  // }

  // Model initialization
  var init = function(w, h) {
    width = w;
    height = h;
    generateBoard();
  }

  // Public interface
  return {
    init: init,
    getWidth: getWidth,
    getHeight: getHeight,
    getCurrentPiece: getCurrentPiece,
    generatePiece: generatePiece,
    movePiece: movePiece,
    tic: tic
  }

})(TETRIS.PieceModule);
