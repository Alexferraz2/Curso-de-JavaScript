function addSquares(a, b) {
    const square = (a, b) => Math.sqrt(a, b);
       
    let sqrtA = square(a);
    let sqrtB = square(b);
  
    return sqrtA + sqrtB;
  }
  console.log(`${addSquares(49, 9)}`);