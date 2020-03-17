// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  "setupFilesAfterEnv": [
    "<rootDir>/src/setupTests.ts"
  ],
  "clearMocks": true,
  "coverageDirectory": "coverage",
  "moduleFileExtensions": [
    "ts", "tsx", "js", "jsx", "json", "node"
  ],
  "coveragePathIgnorePatterns": [
    "<rootDir>/src/index.tsx",
    "<rootDir>/node_modules/"
  ],
  "roots": [
    "<rootDir>/src"
  ],
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.css$": "<rootDir>/config/cssTransform.js",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/config/fileTransform.js"
  },
};
