var TETRIS = TETRIS || {};

TETRIS.PieceModule = (function() {

  // All possible colors and shapes for Tetris pieces.
  // The shape and color of a piece have the same index in both arrays.
  // For example, the 'L' piece will have the color 'orange', since both
  //   values have an index of 1 in their respective arrays.
  var _possibleShapes =
    ["I", "L", "J", "O", "T", "Z", "S"];
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
        coords.push({ x: pivot.x - 1, y: pivit.y + 1 });
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

  // Rotate a piece based on its shape and current coordinates.
  Piece.prototype.rotate = function() {
    return;
  }

  // Move a piece down with each tic.
  Piece.prototype.tic = function() {
    return;
  }

  // Return object
  return {
    Piece: Piece
  }


})();
