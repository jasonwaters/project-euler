// Path sum: two ways
// Problem 81
// https://projecteuler.net/problem=81

function traverseMinimalPath(matrix, costMatrix) {
  const numRows = costMatrix.length;
  const numCols = costMatrix[0].length;
  let row =0;
  let col = 0;

  let stack = [matrix[0][0]];

  while(row+1 < numRows || col+1 < numCols) {

    let downCost = row+1 < numCols ? costMatrix[row+1][col] : Number.MAX_SAFE_INTEGER;
    let rightCost = col+1 < numCols ? costMatrix[row][col+1] : Number.MAX_SAFE_INTEGER;

    if(downCost < rightCost) {
      stack.push(matrix[row+1][col]);
      row++;
    }else {
      stack.push(matrix[row][col+1]);
      col++;
    }

  }

  return stack;
}


function minimalPath(matrix) {
  let costMatrix = matrix.map(row => row.slice(0));

  const numRows = costMatrix.length;
  const numCols = costMatrix[0].length;

  for(let row=numRows-1;row>=0;row--) {
    for(let col=numCols-1;col>=0;col--) {
      let value = 0;

      if(row + 1 < numRows && col + 1 < numCols) { /* inside cell, choose smallest of right and bottom cells  */
        value = Math.min(costMatrix[row+1][col], costMatrix[row][col+1]);
      }else if(row+1 < numRows) { /* right side, must choose cell beneath */
        value = costMatrix[row+1][col];
      }else if(col+1 < numCols) { /* bottom row, must choose cell to the right */
        value = costMatrix[row][col+1];
      }

      costMatrix[row][col] += value;
    }
  }

  return {
    sum: costMatrix[0][0],
    path: traverseMinimalPath(matrix, costMatrix)
  };
}


module.exports = {
  minimalPath,
};
