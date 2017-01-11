var TETRIS = TETRIS || {};

TETRIS.view = {

  init: function(width, height) {
    this.buildBoard(width, height);
  },

  buildBoard: function(width, height) {
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
  },

  undrawPiece: function(piece) {
    var x = piece.coords[0].x; // row id
    var y = piece.coords[0].y; // col id

    $('#game-board').children('#' + y )
      .children('#' + x)
      .removeClass('piece');
  },

  drawPiece: function(piece) {

    var x = piece.coords[0].x; // row id
    var y = piece.coords[0].y; // col id

    $('#game-board').children('#' + y )
      .children('#' + x)
      .addClass('piece');

  }

};
