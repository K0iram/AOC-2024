import { data } from './data.js';

const directions = [
  { row: -1, col: 0 },  // Up
  { row: 0, col: 1 },   // Right
  { row: 1, col: 0 },   // Down
  { row: 0, col: -1 }   // Left
];

const findStartingPosition = map => {
  for (let i = 0; i < map.length; i++) {
    const rowArray = map[i].split('');
    if (rowArray.indexOf('^') !== -1) { 
      return { row: i, col: rowArray.indexOf('^'), direction: 0 };
    } else {
      i++;
    }
  }
}

const isInBounds = (row, col, map) => {
  return row >= 0 && row < map.length && col >= 0 && col < map[0].length;
}

const findStepsTaken = map => {
  let guard = findStartingPosition(map);
  const steps = new Set();
  steps.add(`${guard.row},${guard.col}`);
  
  while (true) {
    const nextRow = guard.row + directions[guard.direction].row;
    const nextCol = guard.col + directions[guard.direction].col;
   
    if (!isInBounds(nextRow, nextCol, map)) {
      break;
    }

    if (map[nextRow][nextCol] !== '#') {
      guard.row = nextRow;
      guard.col = nextCol;
    } else {
      guard.direction = (guard.direction + 1) % 4;
    }

    const currPosition = `${guard.row},${guard.col}`;
    if (!steps.has(currPosition)) {
      steps.add(currPosition);
    }
  }
  
  return steps.size;
}

console.log(findStepsTaken(data));
