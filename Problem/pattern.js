function invertedTriangle(rows) {
  for (let i = rows; i >= 1; i--) {
    console.log("*".repeat(i));
  }
}
invertedTriangle(5);