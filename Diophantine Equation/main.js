function solequa(n) {
  let result = [], a, b;
  for(let a = 1;a <= Math.sqrt(n); a++) {
    if(Number.isInteger(b = n/a)){
      if(Number.isInteger(x = (b+a)/2)){
        if(Number.isInteger(y = (b-a)/4)){
          result.push([x, y]);
        }
      }
    }
  }
  return result;
}
