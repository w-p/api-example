import { DefectSchema } from "@/models/defect";

const CORRECT_DEFECT = {
  id: "abc",
  timestamp: 123456789,
  system: "foo",
  code: 123,
  severity: "super bad",
  error: "all your base are belong to us",
};

const INCOMPLETE_DEFECT = {
  system: "foo",
  code: 123,
  severity: "super bad",
  error: "all your base are belong to us",
};

const BAD_TYPES_DEFECT = {
  id: 123,
  timestamp: new Date().toISOString(),
  system: "foo",
  code: 123,
  severity: "super bad",
  error: "all your base are belong to us",
};

describe("defect model", () => {
  it("should require id, timestamp, system, code, severity, and error fields", () => {
    expect(() => DefectSchema.validateSync(CORRECT_DEFECT, { strict: true })).not.toThrowError();
    expect(() => DefectSchema.validateSync(INCOMPLETE_DEFECT, { strict: true })).toThrowError();
    expect(() => DefectSchema.validateSync(BAD_TYPES_DEFECT, { strict: true })).toThrowError();
  });
});
