function beggars(values, n) {
  var totals = [];

  for (var i = 0; i < n; i++) {
    var sum = 0;
    for (var j = i; j < values.length; j = j + n) {
      sum += values[j];
    }
    totals.push(sum);
  }
  return totals;
}



beggars([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
