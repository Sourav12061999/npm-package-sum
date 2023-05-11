const sum = (...params) => {
  return params.reduce((a, b) => a + b);
};

module.exports = sum;
