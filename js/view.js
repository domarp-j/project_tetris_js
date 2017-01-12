var TETRIS = TETRIS || {};

TETRIS.View = (function() {

  var defaultColor = '#EFEFEF';

  // Build the rows and columns in HTML
  // Set row classes, col classes, and ids to represent
  //   x & y coordinates for each cell.
  // NOTE: (0,0) will be located at the top left.
  var buildBoard = function(width, height) {
    var $board = $('#gameboard');

    for (var row = 0; row < height; row++) {
      var $row = $('<div class="row">')
        .attr('id', row);
      for (var col = 0; col < width; col++) {
        var $col = $('<div class="col">')
          .attr('id', col);
        $row.append($col);
      }
      $board.append($row);
    }
  }

  // // Clear the board of all styles
  var clearBoard = function() {
    $('.col').css('background-color', defaultColor);
  }

  // Draw a piece on the board by setting the appropriate
  //   background color at each cell.
  var drawPiece = function(piece) {
    piece.coords.forEach(function(coords) {
      $('#gameboard')
        .children('#' + coords.y)
        .children('#' + coords.x)
        .css('background-color', piece.color);
    });
  }

  // Remove, or 'undraw', a piece on the board by setting the
  //   background color to default.
  // TODO: Refactor, since it is so similar to drawPiece - possibly
  //   take argument as a color?
  var undrawPiece = function(piece) {
    piece.coords.forEach(function(coords) {
      $('#gameboard')
        .children('#' + coords.y)
        .children('#' + coords.x)
        .css('background-color', defaultColor);
    });
  }

  // Listen for any key presses, and pass them along to the
  //   controller for use.
  var addEventListener = function(keyPressHandler) {
    $(document).on('keyup', keyPressHandler);
  }

  // View initialization
  var init = function(keyPressHandler, width, height) {
    buildBoard(width, height);
    addEventListener(keyPressHandler);
  }

  // Public interface
  return {
    init: init,
    clearBoard: clearBoard,
    drawPiece: drawPiece,
    undrawPiece: undrawPiece
  }

})();
