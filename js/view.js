var TETRIS = TETRIS || {};

TETRIS.View = (function() {

  // Build the rows and columns in HTML
  // Set row classes, col classes, and ids to represent
  //   x & y coordinates for each cell.
  // NOTE: (0,0) will be located at the top left.
  var buildBoard = function(width, height) {
    var $board = $('#game-board');

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

  // Draw a piece on the board by setting the appropriate
  //   classes to each cell.
  // The piece stores the color
  var drawPiece = function(piece) {
    piece.coords.forEach(function(coords) {
      $('#game-board').children('#' + coords.y)
        .children('#' + coords.x)
        .css('background-color', piece.color)
    });
  }

  var init = function(width, height) {
    buildBoard(width, height);
  }

  return {
    init: init,
    drawPiece: drawPiece
  }

  // init: function(width, height) {
  //   this.buildBoard(width, height);
  // },
  //
  // buildBoard: function(width, height) {
  //   var $board = $('#game-board');
  //
  //   for (var row = 0; row < height; row++) {
  //
  //     var $row = $('<div class="row">')
  //       .attr('id', row);
  //
  //     for (var col = 0; col < width; col++) {
  //       var $col = $('<div class="col">')
  //         .attr('id', col);
  //       $row.append($col);
  //     }
  //
  //     $board.append($row);
  //   }
  // },
  //
  // undrawPiece: function(piece) {
  //   var x = piece.coords[0].x; // row id
  //   var y = piece.coords[0].y; // col id
  //
  //   $('#game-board').children('#' + y )
  //     .children('#' + x)
  //     .removeClass('piece');
  // },
  //
  // drawPiece: function(piece) {
  //   var x = piece.coords[0].x; // row id
  //   var y = piece.coords[0].y; // col id
  //
  //   $('#game-board').children('#' + y )
  //     .children('#' + x)
  //     .addClass('piece');
  // },
  //
  // renderPiece: function(lastPiece, currentPiece) {
  //   this.undrawPiece(lastPiece);
  //   this.drawPiece(currentPiece);
  // },
  //
  // lookForKeyPress: function(registerKeyPress) {
  //   $(document).on('keyup', function(event) {
  //     registerKeyPress(event.keyCode);
  //   });
  // }

})();
