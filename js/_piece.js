var TETRIS = TETRIS || {};

TETRIS.PieceModule = (function() {

  // All possible shapes for Tetris pieces.
  var _possibleShapes =
    ["I", "L", "J", "O", "T", "Z", "S"];

  // All possible colors for Tetris pieces.
  // The shape and color of a piece are paired up by their indices in their
  //   respective arrays.
  // For example, a J-shaped piece will be the yellow.
  var _possibleColors =
    ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'aqua'];

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
    this.color = _possibleColors[_possibleShapes.indexOf(shape)];
    this.coords = [{ x: startX, y: startY, pivot: true }];
    _getCoords(this.shape, this.coords);
  }

  // Get the smallest X coordinate for the piece
  Piece.prototype.smallestX = function() {
    return Math.min(
      this.coords[0].x, this.coords[1].x,
      this.coords[2].x, this.coords[3].x
    )
  }

  // Get the largest X coordinate for the piece
  Piece.prototype.largestX = function() {
    return Math.max(
      this.coords[0].x, this.coords[1].x,
      this.coords[2].x, this.coords[3].x
    )
  }

  // Get the largest Y coordinate for the piece
  Piece.prototype.largestY = function() {
    return Math.max(
      this.coords[0].y, this.coords[1].y,
      this.coords[2].y, this.coords[3].y
    )
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
