var TETRIS = TETRIS || {};

TETRIS.controller = {

  init: function() {
    TETRIS.model.init();
    TETRIS.view.init(TETRIS.model.width, TETRIS.model.height);
    TETRIS.view.lookForKeyPress(this.registerKeyPress);
    this.gameLoop();
  },

  registerKeyPress: function(keyCode) {
    switch (keyCode) {
      case 37: // left
        TETRIS.model.movePiece('L');
        break;
      case 39: // right
        TETRIS.model.movePiece('R');
        break;
      case 40: // down
        // TETRIS.model.autoDrop();
        break;
      default:
        return;
    }
    TETRIS.view.renderPiece(TETRIS.model.lastPiece, TETRIS.model.currentPiece);
  },

  movePieceDown: undefined,

  gameLoop: function() {
    TETRIS.model.generatePiece();
    this.movePieceDown = setInterval(function() {
      if (TETRIS.model.checkForCollision()) {
        TETRIS.model.storePiece();
        TETRIS.model.checkForFullRows();
        TETRIS.model.generatePiece();
      } else {
        TETRIS.model.tic();
        TETRIS.view.renderPiece(TETRIS.model.lastPiece, TETRIS.model.currentPiece);
      }
    }, 200);
  }

};

$(document).ready(function() {
  TETRIS.controller.init();
});
