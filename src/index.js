module.exports = function reverse(num) {
  return Number(String(Math.abs(num)).split('').reverse().join(''));
};
