import { loadConfig, EnvironmentConfig } from "@/lib/config";

const ENVIRONMENT_CACHE = process.env;

const COMPLETE_CONFIG_PATH = `${__dirname}/../fixtures/local.app.env`;

const DEFAULT_CONFIG_PATH = `${__dirname}/../fixtures/default.app.env`;

const DEFAULT_CONFIG: EnvironmentConfig = {
  env: "local",
  host: "0.0.0.0",
  port: 3001,
  db: {
    host: "0.0.0.0",
    port: 5432,
    name: "postgres",
    user: "postgres",
    pass: "postgres",
  },
};

const COMPLETE_CONFIG: EnvironmentConfig = {
  env: "local",
  host: "1.2.3.4",
  port: 1234,
  db: {
    host: "2.3.4.5",
    port: 5678,
    name: "foo",
    user: "bar",
    pass: "baz",
  },
};

describe("loadConfig", () => {
  beforeEach(() => {
    process.env = {};
  });

  afterEach(() => {
    process.env = ENVIRONMENT_CACHE;
  });

  it("should read and parse a complete env configuration file from a given path", () => {
    const config: EnvironmentConfig = loadConfig(COMPLETE_CONFIG_PATH, true);
    expect<EnvironmentConfig>(config).toMatchObject(COMPLETE_CONFIG);
  });

  it("should return a default EnvironmentConfig when a config file is missing values", () => {
    const config: EnvironmentConfig = loadConfig(DEFAULT_CONFIG_PATH, true);
    expect<EnvironmentConfig>(config).toMatchObject(DEFAULT_CONFIG);
  });
});
