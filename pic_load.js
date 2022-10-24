const Max = require("max-api");
const path = require("path");

let matrix = [];

Max.addHandler("dimension_set", (x_dim, y_dim) => {
  for (let i = 0; i < y_dim; i++) {
    let row = [];
    for (let q = 0; q < x_dim; q++) {
      row.push([]);
    }
    matrix.push(row);
  }
  Max.post(matrix);
});

Max.addHandler("list_iter", (r, g, b, a, x, y) => {
  matrix[y][x].push(r, g, b, a);
  Max.post(matrix);
});

Max.addHandler("clear", () => {
  matrix = [];
});

Max.addHandler("spill", () => {
  let new_matrix = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let r = 0; r < matrix[i].length; r++) {
      for (let q = 0; q < matrix[i][r].length; q++) {
        new_matrix.push(matrix[i][r][q]);
      }
    }
  }
  Max.outlet(new_matrix);
});
