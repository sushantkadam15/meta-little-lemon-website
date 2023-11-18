module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$', // Update to match your test file naming convention
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        "\\.(svg)$": "identity-obj-proxy",
      },
      testEnvironment: "jsdom",
  };
  