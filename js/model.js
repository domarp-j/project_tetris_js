var TETRIS = TETRIS || {};

TETRIS.Model = (function(PieceModule) {

  var width =  10, height = 20;
  var lastPiece = {}, currentPiece = {};
  var board = [];

  var generateBoard = function() {
    for (var row = 0; row < height; row++) {
      board.push([]);
      for (var col = 0; col < width; col++) {
        board[board.length-1].push(undefined);
      }
    }
  }

  var generatePiece = function() {
    var shape = PieceModule.getRandomShape();
    currentPiece =
  }

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

  var init = function() {
    generateBoard();
  }

})(TETRIS.PieceModule);
