var model = {

  width: 10,
  height: 20,
  currentPiece: {},

  init: function() {

  },

  tic: function() {
    this.currentPiece.coords.forEach(function(pieceCoords) {
      pieceCoords.y += 1;
    });
  },

  generatePiece: function() {
    this.currentPiece = new Piece();
    this.currentPiece.coords = [{ x: 0, y: 0 }];
  }

};
