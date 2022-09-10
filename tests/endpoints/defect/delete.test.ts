import { api } from "@/api";

const INJECT_METHOD = "DELETE";
const INJECT_URL = "/defect/811e9797-71c0-4f19-805e-c6fcc780562d";
const OK_RESPONSE_CODE = 200;

describe("defect", () => {
  afterAll(() => api.close());

  it("should create a defect record", async () => {
    const response = await api.inject({
      url: INJECT_URL,
      method: INJECT_METHOD,
    });
    expect(response.statusCode).toEqual(OK_RESPONSE_CODE);
  });
});
