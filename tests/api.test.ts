import { api } from "@/api";

const INJECT_METHOD = "GET";
const INJECT_URL = "/foo";

describe("api", () => {
  it("should response with a 404 when a route is not found", async () => {
    const response = await api.inject({ method: INJECT_METHOD, url: INJECT_URL });
    expect(response.statusCode).toEqual(404);
  });
});
