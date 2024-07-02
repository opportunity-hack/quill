const request = require("supertest");
const app = require("./app.js");

describe("Get Login", () => {
  it("Should Get the login Page", async () => {
    const res = await request(app).get("/login");
    expect(res.statusCode).toEqual(200);
  });
});

describe("Get status of resend's email", () => {
  it("Should Get the status of resend", async () => {
    const res = await request(app).get("/verify/resend");
    expect(res.statusCode).toEqual(200);
  });
});
