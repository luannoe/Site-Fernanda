module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  collectCoverageFrom: ['src/**/*.(js|jsx)'],
  coverageDirectory: 'coverage'
};
