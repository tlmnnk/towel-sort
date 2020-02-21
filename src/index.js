
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if(!matrix) { return []; }
  
  return matrix.reduce((acc, item, i) => {
    acc = [...acc, ...(i % 2 === 0 ? item : item.reverse())];
    return acc;
  }, []);
};
