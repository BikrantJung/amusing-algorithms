function findBinary(decimal, result) {
  if (decimal == 0) return result;
  result = (decimal % 2) + result;
  return findBinary(Math.floor(decimal / 2), result);
}

findBinary(45, "");
