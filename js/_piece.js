var TETRIS = TETRIS || {};

TETRIS.PieceModule = (function() {

  // All possible shapes for Tetris pieces.
  var _possibleShapes =
    ["I", "L", "J", "O", "T", "Z", "S"];

  // Determine the starting coordinates based on the piece's shape.
  // The array 'coords' should only contain one coordinate object so far, which
  //   is the pivot coordinate.
  // Note that coords is directly modified here since it is passed by reference.
  var _getCoords = function(shape, coords) {
    var pivot = coords[0];

    switch (shape) {
      case 'I':
        coords.push({ x: pivot.x - 1, y: pivot.y });
        coords.push({ x: pivot.x + 1, y: pivot.y });
        coords.push({ x: pivot.x + 2, y: pivot.y });
        break;
      case 'L':
        coords.push({ x: pivot.x - 1, y: pivot.y });
        coords.push({ x: pivot.x + 1, y: pivot.y });
        coords.push({ x: pivot.x - 1, y: pivot.y + 1 });
        break;
      case 'J':
        coords.push({ x: pivot.x - 1, y: pivot.y });
        coords.push({ x: pivot.x + 1, y: pivot.y });
        coords.push({ x: pivot.x + 1, y: pivot.y + 1 });
        break;
      case 'O':
        coords.push({ x: pivot.x - 1, y: pivot.y });
        coords.push({ x: pivot.x - 1, y: pivot.y + 1 });
        coords.push({ x: pivot.x, y: pivot.y + 1 });
        break;
      case 'T':
        coords.push({ x: pivot.x - 1, y: pivot.y });
        coords.push({ x: pivot.x + 1, y: pivot.y });
        coords.push({ x: pivot.x, y: pivot.y + 1 });
        break;
      case 'Z':
        coords.push({ x: pivot.x - 1, y: pivot.y });
        coords.push({ x: pivot.x, y: pivot.y + 1 });
        coords.push({ x: pivot.x + 1, y: pivot.y + 1});
        break;
      case 'S':
        coords.push({ x: pivot.x + 1, y: pivot.y });
        coords.push({ x: pivot.x, y: pivot.y + 1 });
        coords.push({ x: pivot.x - 1, y: pivot.y + 1});
        break;
      default:
        console.error("Invalid shape passed into TETRIS.PieceModule._getCoords().")
        return;
    }
  }

  // This is the constructor for a piece.
  function Piece(shape, startX, startY) {
    this.shape = shape;
    this.coords = [{ x: startX, y: startY, pivot: true }];
    _getCoords(this.shape, this.coords);
  }

  // Rotate a piece based on its shape and current coordinates.
  Piece.prototype.rotate = function(direction) {
    return;
  }

  // Increment a piece's y-coordinates with each tic.
  Piece.prototype.tic = function() {
    this.coords.forEach(function(blockCoords) {
      blockCoords.y += 1;
    })
  }

  // Get a random shape from the _possibleShapes array
  var getRandomShape = function() {
    return _possibleShapes[Math.floor(Math.random() * _possibleShapes.length)];
  }

  // Public interface
  return {
    Piece: Piece,
    getRandomShape: getRandomShape
  }

})();
