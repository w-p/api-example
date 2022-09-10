import { api } from "@/api";

const INJECT_METHOD = "PUT";
const INJECT_URL = "/defect";
const INJECT_BODY = { system: "foo", code: 123, severity: "warn", error: "" };
const OK_RESPONSE_CODE = 200;

describe("defect", () => {
  afterAll(() => api.close());

  it("should create a defect record", async () => {
    const response = await api.inject({
      url: INJECT_URL,
      method: INJECT_METHOD,
      payload: INJECT_BODY,
    });
    expect(response.statusCode).toEqual(OK_RESPONSE_CODE);
    const body = response.json();
    expect(body).toBeUndefined();
  });
});
