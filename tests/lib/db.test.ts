import { getDB, readSQL } from "@/lib/db";
import { Pool } from "pg";

const SQL_FILE_PATH = `${__dirname}/../fixtures/db.read.sql`;

const SQL_FILE_CONTENTS = "select 1;";

describe("readSQL", () => {
  it("should read a sql file from a given path", () => {
    const sql = readSQL(SQL_FILE_PATH);
    expect(sql).toEqual(SQL_FILE_CONTENTS);
  });
});

describe("getDB", () => {
  it("should return a pg pool", () => {
    const db = getDB();
    expect(db).toBeInstanceOf(Pool);
  });
});
