
// square
function printSquare(n = 5) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

printSquare();

//Right angle triangle
function printTriangle(height = 5) {
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
printTriangle();

function printInvertedTriangle(height = 5) {
  for (let i = height; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

printInvertedTriangle();


function printDiamond(height = 5) {

  for (let i = 1; i <= height; i++) {
    let row = " ".repeat(height - i) + "* ".repeat(i);
    console.log(row);
  }


  for (let i = height - 1; i >= 1; i--) {
    let row = " ".repeat(height - i) + "* ".repeat(i);
    console.log(row);
  }
}


printDiamond();


function printInvertedTriangle(height = 5) {
  for (let i = height; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

printInvertedTriangle();


function printDiamond(height = 5) {

  for (let i = 1; i <= height; i++) {
    let row = " ".repeat(height - i) + "* ".repeat(i);
    console.log(row);
  }

  for (let i = height - 1; i >= 1; i--) {
    let row = " ".repeat(height - i) + "* ".repeat(i);
    console.log(row);
  }
}

printDiamond();

function printPyramid(n = 5) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
}

printPyramid();

function printNumberPyramid(n = 5) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + (i.toString()).repeat(2 * i - 1));
  }
}

// Call the function
printNumberPyramid();

function printPascalsTriangle(n = 5) {
  for (let i = 0; i < n; i++) {
    let row = " ".repeat(n - i);
    let value = 1;
    for (let j = 0; j <= i; j++) {
      row += value + " ";
      value = value * (i - j) / (j + 1);
    }
    console.log(row);
  }
}

printPascalsTriangle();

function printHollowSquare(n = 5) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {

      if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

printHollowSquare();

function printHourglass(n = 4) {

  for (let i = n; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }

  for (let i = 2; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
}


printHourglass();

function printZigzag(n = 3, length = 10) {

  let grid = Array.from({ length: n }, () => Array(length).fill(" "));

  let row = 0, down = true;
  for (let col = 0; col < length; col++) {
    grid[row][col] = "*";

    if (down) {
      row++;
      if (row === n - 1) down = false;
    } else {
      row--;
      if (row === 0) down = true;
    }
  }


  grid.forEach(r => console.log(r.join("")));
}

printZigzag(3, 15);