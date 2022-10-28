var matrix = [];

inlets = 1;
outlets = 1;

function dimension_set(x_dim, y_dim) {
  matrix = [];
  for (var i = 0; i < y_dim; i++) {
    var row = [];
    for (var q = 0; q < x_dim; q++) {
      row.push({ r: 0, g: 0, b: 0, a: 0 });
    }
    matrix.push(row);
  }
}

function set_channel(channel, ...list) {
  var count = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var q = 0; q < matrix[i].length; q++) {
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
          break;
      }
    }
  }
}

// Max.addHandler("clear", () => {
//   matrix = [];
// });

// Max.addHandler("spill", () => {
//   var matrix_elements = { r: [], g: [], b: [], a: [] };
//   for (var i = 0; i < matrix.length; i++) {
//     for (var q = 0; q < matrix[i].length; q++) {
//       matrix_elements.r.push(matrix[i][q].r);
//       matrix_elements.g.push(matrix[i][q].g);
//       matrix_elements.b.push(matrix[i][q].b);
//       matrix_elements.a.push(matrix[i][q].a);
//     }
//   }
//   Max.outlet(matrix_elements);
// });
