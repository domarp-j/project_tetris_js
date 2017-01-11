var model = {

  width: 10,
  height: 20,
  lastPiece: {},
  currentPiece: {},
  board: [],

  init: function() {
    this.generateBoard();
  },

  generateBoard: function() {
    for (var row = 0; row < this.height; row++) {
      this.board.push([]);
      for (var col = 0; col < this.width; col++) {
        this.board[this.board.length-1].push(false);
      }
    }
  },

  tic: function() {

    this.lastPiece = $.extend(true, {}, this.currentPiece);

    this.currentPiece.coords.forEach(function(pieceCoords) {
      pieceCoords.y += 1;
    });

  },

  checkForCollision: function() {
    var largestY = this.getLargestY();

    if (largestY === this.height - 1) {
      return true;
    }

    return false;
  },

  getLargestY: function() {
    var largestY = 0;

    for (var i = 0; i < this.currentPiece.coords.length; i++) {
      if (this.currentPiece.coords[i].y > largestY) {
        largestY = this.currentPiece.coords[i].y;
      }
    }

    return largestY;
  },

  generatePiece: function() {
    this.currentPiece = new Piece();
    this.currentPiece.coords = [{ x: 0, y: -1 }];
  },

  storePiece: function() {
    this.currentPiece.coords.forEach(function(coords) {
      this.board[coords.x][coords.y] = this.currentPiece.color;
    });
  }

};
