var view = {

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

};