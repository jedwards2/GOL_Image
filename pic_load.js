const Max = require("max-api");
const path = require("path");

let matrix = [];

Max.addHandler("dimension_set", (x_dim, y_dim) => {
  matrix = [];
  for (let i = 0; i < y_dim; i++) {
    let row = [];
    for (let q = 0; q < x_dim; q++) {
      row.push({ r: 0, g: 0, b: 0, a: 0 });
    }
    matrix.push(row);
  }
  Max.post(matrix);
});

Max.addHandler("set_channel", (channel, ...list) => {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let q = 0; q < matrix[i].length; q++) {
      switch (channel) {
        case "r":
          matrix[i][q].r = list[count];
          count += 1;
          break;
        case "g":
          matrix[i][q].g = list[count];
          count += 1;
          break;
        case "b":
          matrix[i][q].b = list[count];
          count += 1;
          break;
        case "a":
          matrix[i][q].a = list[count];
          count += 1;
          break;
        default:
          throw new Error();
      }
    }
  }
  Max.post(matrix);
});

// Max.addHandler("list_iter", (r, g, b, a, x, y) => {
//   matrix[y][x].push({ r: r, g: g, b: b, a: a });
//   Max.post(matrix);
// });

Max.addHandler("clear", () => {
  matrix = [];
});

Max.addHandler("spill", () => {
  let matrix_elements = { r: [], g: [], b: [], a: [] };
  for (let i = 0; i < matrix.length; i++) {
    for (let q = 0; q < matrix[i].length; q++) {
      matrix_elements.r.push(matrix[i][q].r);
      matrix_elements.g.push(matrix[i][q].g);
      matrix_elements.b.push(matrix[i][q].b);
      matrix_elements.a.push(matrix[i][q].a);
    }
  }
  Max.outlet(matrix_elements);
});
