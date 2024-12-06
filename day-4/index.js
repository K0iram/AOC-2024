import { data } from "./data.js";

const findAllXMAS = (data) => {
  const rows = data.trim().split('\n');
  const numRows = rows.length;
  const numCols = rows[0].length;
  const target = "XMAS";
  const reverseTarget = "SAMX";
  let count = 0;

  const checkDirection = (row, col, rowStep, colStep) => {
    let str = '';
    for (let i = 0; i < target.length; i++) {
      const newRow = row + i * rowStep;
      const newCol = col + i * colStep;
      if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols) {
        str += rows[newRow][newCol];
      } else {
        return;
      }
    }
    if (str === target || str === reverseTarget) {
      count++;
    }
  };

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      checkDirection(row, col, 0, 1);   // Horizontal
      checkDirection(row, col, 1, 0);   // Vertical
      checkDirection(row, col, 1, 1);   // Diagonal right
      checkDirection(row, col, 1, -1);  // Diagonal left
    }
  }

  return count;
};

const findAllXMASPatterns = (data) => {
  const rows = data.trim().split('\n');
  const numRows = rows.length;
  const numCols = rows[0].length;
  let count = 0;

  const checkXMASPattern = (row, col) => {
    if (row > 0 && row < numRows - 1 && col > 0 && col < numCols - 1) {
      const topLeft = rows[row - 1][col - 1];
      const topRight = rows[row - 1][col + 1];
      const center = rows[row][col];
      const bottomLeft = rows[row + 1][col - 1];
      const bottomRight = rows[row + 1][col + 1];

      if (
        (topLeft === 'M' && topRight === 'S' && center === 'A' && bottomLeft === 'M' && bottomRight === 'S') ||
        (topLeft === 'S' && topRight === 'M' && center === 'A' && bottomLeft === 'S' && bottomRight === 'M') ||
        (topLeft === 'M' && topRight === 'M' && center === 'A' && bottomLeft === 'S' && bottomRight === 'S') ||
        (topLeft === 'S' && topRight === 'S' && center === 'A' && bottomLeft === 'M' && bottomRight === 'M')
      ) {
        count++;
      }
    }
  };

  for (let row = 1; row < numRows - 1; row++) {
    for (let col = 1; col < numCols - 1; col++) {
      checkXMASPattern(row, col);
    }
  }

  return count;
};

console.log(findAllXMASPatterns(data));
