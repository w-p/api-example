module.exports = {
  verbose: true,
  transform: {
    "^.+\\.ts?$": "esbuild-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testMatch: ["**/?(*.)+(test).ts"],
};
