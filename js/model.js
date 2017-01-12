var TETRIS = TETRIS || {};

TETRIS.model = {

  width: 10,
  height: 20,
  lastPiece: {},
  currentPiece: {},
  board: [],

  init: function() {
    this.generateBoard();
  },

  generateBoard: function() {
    for (var row = 0; row < this.height; row++) {
      this.board.push([]);
      for (var col = 0; col < this.width; col++) {
        this.board[this.board.length-1].push(false);
      }
    }
  },

  tic: function() {

    this.lastPiece = $.extend(true, {}, this.currentPiece);

    this.currentPiece.coords.forEach(function(pieceCoords) {
      pieceCoords.y += 1;
    });

  },

  checkForCollision: function() {

    var largestY = this.getLargestY();

    if (largestY === this.height - 1) {
      return true;
    }

    if (this.board[largestY + 1][this.currentPiece.coords[0].x]) {
      return true;
    }

    return false;
  },

  getLargestY: function() {
    var largestY = 0;

    for (var i = 0; i < this.currentPiece.coords.length; i++) {
      if (this.currentPiece.coords[i].y > largestY) {
        largestY = this.currentPiece.coords[i].y;
      }
    }

    return largestY;
  },

  generatePiece: function() {
    this.currentPiece = new TETRIS.Piece();
    var x = Math.floor(Math.random() * this.width);
    this.currentPiece.coords = [{ x: x, y: 0 }];
  },

  storePiece: function() {
    this.currentPiece.coords.forEach(function(coords) {
      TETRIS.model.board[coords.y][coords.x] = TETRIS.model.currentPiece.color;
    });
  },

  movePiece: function(direction) {

    var delta = 0;

    switch (direction) {
      case 'L':
        delta = -1;
        break;
      case 'R':
        delta = 1;
        break;
      default:
        return;
    }

    this.lastPiece = $.extend(true, {}, this.currentPiece);

    this.currentPiece.coords.forEach(function(coords) {
      var newX = coords.x + delta;
      if (newX >= 0 && newX < TETRIS.model.width) {
        coords.x = newX;
      };
    });
  },

  checkForFullRows: function() {
    // loop over each row

    for (var i = height; i >= 0; i++) {
      var row = this.board[i];
      if (rowFull(row)) {
        // clear out that row

        // change position of other boxes
      }
    }

  },

  rowFull: function(row) {
    if (row.indexOf(false) > -1) {
      return false;
    }
    return true;
  },

};


// 1) we have some full rows

// 4  #
// 3  ####
// 2  ## #
// 1 |####|
// 0 |# ##|

// // 2) set all full rows to false, bottom up

// // (could iterate from bottom up, if make entire pass of all 20 rows without finding a full row, then done. If find full row, then iterate from bottom up again)

// // *** (another way: iterate through all rows, setting rows to false if the row is full. Then iterate through all rows again, if row is false, remove and increment numOfRowsToMoveDown. If row has stuff in it, move the row down by numOfRowsToMoveDown ) ***

// 4  #
// 3  ffff
// 2  ## #
// 1 |ffff|
// 0 |# ##|

// // 3) move down all rows that are above rows that are empty

// 4
// 3  
// 2  #
// 1 |## #|
// 0 |# ##|

// 4) render board



