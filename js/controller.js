var TETRIS = TETRIS || {};

TETRIS.Controller = (function(Model, View) {

  var gameSpeed = 200;
  var fallInterval = undefined;

  // Game loop
  var fallLoop = function() {
    fallInterval = setInterval(function() {
      Model.tic();
      if (Model.impendingCollision()) {
        clearInterval(fallInterval);
        // Model.storePiece();
        // Model.checkFullRows();
        // Model.generatePiece();
        console.log(Model.impendingCollision());
      }
      View.clearBoard();
      View.drawPiece(Model.getCurrentPiece());
    }, gameSpeed);
  }

  // Keyboard press handler
  var keyPressHandler = function(e) { // e = event
    switch (e.keyCode) {
      case 37:
        View.undrawPiece(Model.getCurrentPiece());
        Model.movePiece('L');
        View.drawPiece(Model.getCurrentPiece());
        break;
      case 39:
        View.undrawPiece(Model.getCurrentPiece());
        Model.movePiece('R');
        View.drawPiece(Model.getCurrentPiece());
        break;
      default:
        return;
    }
  }

  // Controller initialization
  var init = function() {
    Model.init(10, 20); // width & height
    View.init(keyPressHandler, Model.getWidth(), Model.getHeight());
    Model.generatePiece();
    View.drawPiece(Model.getCurrentPiece());
    fallLoop();
  }

  // Public interface
  return {
    init: init
  }

})(TETRIS.Model, TETRIS.View);

$(document).ready(function() {
  TETRIS.Controller.init();
});
