import { api } from "@/api";

const INJECT_METHOD = "POST";
const INJECT_URL = "/defect";
const INJECT_BODY = {
  after: 0,
  before: +new Date() / 1000,
  system: "foo",
  code: 8500,
  severity: "info",
  error: "%rebooted%",
};
const OK_RESPONSE_CODE = 200;
const OK_ERROR_MESSAGE = "system rebooted";

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
    expect(body.length).toBe(2);
    expect(body[0].id).toBeTruthy();
    expect(body[0].id.length).toBe(36);
    expect(body[0].system).toBe(INJECT_BODY.system);
    expect(body[0].code).toBe(INJECT_BODY.code);
    expect(body[0].severity).toBe(INJECT_BODY.severity);
    expect(body[0].code).toBe(INJECT_BODY.code);
    expect(body[0].error).toBe(OK_ERROR_MESSAGE);
  });
});
