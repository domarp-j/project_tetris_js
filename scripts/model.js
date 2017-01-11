var model = {

  width: 10,
  height: 20,
  lastPiece: {},
  currentPiece: {},

  init: function() {

  },

  tic: function() {

    this.lastPiece = $.extend(true, {}, this.currentPiece);

    this.currentPiece.coords.forEach(function(pieceCoords) {
      pieceCoords.y += 1;
    });
  },

  checkForCollision: function() {

    

  },

  generatePiece: function() {
    this.currentPiece = new Piece();
    this.currentPiece.coords = [{ x: 0, y: -1 }];
  }

};
