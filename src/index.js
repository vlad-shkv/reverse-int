module.exports = function reverse (n) {
  let num = Math.abs(n);
  let numToString = num.toString();
  let numReverse = numToString.split('').reverse().join('');
  return numReverse;
}
