var TETRIS = TETRIS || {};

TETRIS.controller = {

  init: function() {
    TETRIS.model.init();
    TETRIS.view.init(TETRIS.model.width, TETRIS.model.height);
    this.gameLoop();
    // this.controller.inputLoop();
  },

  movePieceDown: undefined,

  gameLoop: function() {
    TETRIS.model.generatePiece();
    this.movePieceDown = setInterval(function() {
      if (TETRIS.model.checkForCollision()) {
        TETRIS.model.storePiece();
        TETRIS.model.generatePiece();
      } else {
        TETRIS.model.tic();
        TETRIS.view.undrawPiece(TETRIS.model.lastPiece);
        TETRIS.view.drawPiece(TETRIS.model.currentPiece);
      }
    }, 200);
  },

  inputLoop: function() {
    // listens for play input at each interval
    // moves piece left/right or rotates depending on input
    // most likely will have smaller intervals than gameLoop
  }

};

$(document).ready(function() {
  TETRIS.controller.init();
});
