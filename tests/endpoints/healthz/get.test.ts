import { api } from "@/api";

const INJECT_METHOD = "GET";
const INJECT_URL = "/healthz";
const OK_RESPONSE_CODE = 200;
const OK_RESPONSE_BODY = { status: "healthy", info: "none" };

describe("healthz", () => {
  afterAll(() => api.close());

  it("should return health information", async () => {
    const response = await api.inject({ method: INJECT_METHOD, url: INJECT_URL });
    expect(response.statusCode).toEqual(OK_RESPONSE_CODE);
    expect(response.json()).toMatchObject(OK_RESPONSE_BODY);
  });
});
