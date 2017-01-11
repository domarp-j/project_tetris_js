var controller = {

  init: function() {
    model.init();
    view.init(model.width, model.height);
    controller.gameLoop();
    // controller.inputLoop();
  },

  gameLoop: function() {
    model.generatePiece();
    setInterval(function() {
      model.tic();
      view.drawPiece(model.currentPiece); 
    }, 1000);
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
