var controller = {

  init: function() {
    model.init();
    view.init(model.width, model.height);
    controller.gameLoop();
    // controller.inputLoop();
  },

  movePieceDown: undefined,

  gameLoop: function() {
    model.generatePiece();
    this.movePieceDown = setInterval(function() {
      if (model.checkForCollision()) {
        model.storePiece();
        model.generatePiece();
      } else {
        model.tic();
        view.undrawPiece(model.lastPiece);
        view.drawPiece(model.currentPiece);
      }
    }, 500);
  },

  inputLoop: function() {
    // listens for play input at each interval
    // moves piece left/right or rotates depending on input
    // most likely will have smaller intervals than gameLoop
  }

};

$(document).ready(function() {
  controller.init();
});
