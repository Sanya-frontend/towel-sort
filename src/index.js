
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length == 0) return [];
  let array = [];
  let num = 0;
  for (let i = 0; i<matrix.length; i++) {
    if (i % 2 != 0)
    {
      for (let n = matrix[i].length - 1; n > -1; n--) {
        array[num] = matrix[i][n];
        num++;
      }
    }
      else
      for (let n = 0; n < matrix[i].length; n++) {
        array[num]= matrix[i][n];
        num++;
      }
  }
  return array;
}
