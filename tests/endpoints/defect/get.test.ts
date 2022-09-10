import { api } from "@/api";

const INJECT_METHOD = "GET";
const INJECT_URL = "/defect";
const OK_RESPONSE_CODE = 200;

describe("defect", () => {
  afterAll(() => api.close());

  it("should create a defect record", async () => {
    const response = await api.inject({
      url: INJECT_URL,
      method: INJECT_METHOD,
    });
    expect(response.statusCode).toEqual(OK_RESPONSE_CODE);
    const body = response.json();
    expect(body.length).toBeGreaterThanOrEqual(6);
    expect(body[0].id).toBeTruthy();
    expect(body[0].id.length).toBe(36);
  });
});
