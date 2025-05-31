module.exports = {
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!(sinon)/)', // allow transforming sinon
    ],
    testEnvironment: 'node',
  };
  